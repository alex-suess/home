import { Injectable } from '@angular/core';
import { Category, Link, Subcategory } from '../models/link.model';

interface FirefoxNodeBase {
  guid: string;
  title: string;
  index: number;
  dateAdded: number;
  lastModified: number;
  id: number;
  typeCode: 1 | 2;
  type: 'text/x-moz-place' | 'text/x-moz-place-container';
}

interface FirefoxBookmarkNode extends FirefoxNodeBase {
  typeCode: 1;
  type: 'text/x-moz-place';
  uri: string;
}

interface FirefoxFolderNode extends FirefoxNodeBase {
  typeCode: 2;
  type: 'text/x-moz-place-container';
  root?: string;
  children?: Array<FirefoxFolderNode | FirefoxBookmarkNode>;
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkExportService {
  /**
   * Build Firefox-compatible bookmark backup JSON from categories.
   */
  createFirefoxBookmarksJson(categories: Category[]): string {
    const tree = this.createRootTree(categories);
    return JSON.stringify(tree, null, 2);
  }

  /**
   * Create a timestamped filename for exported bookmark backups.
   */
  createExportFilename(date = new Date()): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `bookmarks-${year}-${month}-${day}.json`;
  }

  private createRootTree(categories: Category[]): FirefoxFolderNode {
    const nowMicros = Date.now() * 1000;
    let idCounter = 6;

    const nextId = (): number => {
      idCounter += 1;
      return idCounter;
    };

    const makeGuid = (id: number): string => {
      const base = `item${id.toString(36)}`;
      return base.padEnd(12, '_').slice(0, 12);
    };

    const makeFolder = (
      title: string,
      index: number,
      children: Array<FirefoxFolderNode | FirefoxBookmarkNode> = [],
      root?: string,
      guid?: string,
      id?: number
    ): FirefoxFolderNode => ({
      guid: guid ?? makeGuid(id ?? nextId()),
      title,
      index,
      dateAdded: nowMicros,
      lastModified: nowMicros,
      id: id ?? nextId(),
      typeCode: 2,
      type: 'text/x-moz-place-container',
      ...(root ? { root } : {}),
      ...(children.length > 0 ? { children } : {})
    });

    const makeBookmark = (title: string, uri: string, index: number): FirefoxBookmarkNode => {
      const safeTitle = title.trim() || uri;
      return {
        guid: makeGuid(nextId()),
        title: safeTitle,
        index,
        dateAdded: nowMicros,
        lastModified: nowMicros,
        id: nextId(),
        typeCode: 1,
        type: 'text/x-moz-place',
        uri
      };
    };

    const makeBookmarksFromLinks = (links: Link[]): FirefoxBookmarkNode[] =>
      links
        .map((link) => {
          const uri = this.normalizeUrl(link.url);
          if (!uri) {
            return null;
          }

          return {
            title: link.title,
            uri
          };
        })
        .filter((entry): entry is { title: string; uri: string } => entry !== null)
        .map((entry, idx) => makeBookmark(entry.title, entry.uri, idx));

    const categoryFolders = categories
      .map((category, categoryIndex) => {
        const directBookmarks = makeBookmarksFromLinks(category.items);
        const subcategoryFolders = (category.subcategories ?? [])
          .map((subcategory, subIndex) => this.createSubcategoryFolder(subcategory, subIndex, makeBookmarksFromLinks, makeFolder))
          .filter((folder): folder is FirefoxFolderNode => folder !== null);

        const children = [...directBookmarks, ...subcategoryFolders].map((child, idx) => ({
          ...child,
          index: idx
        }));

        if (children.length === 0) {
          return null;
        }

        return makeFolder(category.category || `Category ${categoryIndex + 1}`, categoryIndex, children);
      })
      .filter((folder): folder is FirefoxFolderNode => folder !== null);

    const menuRoot = makeFolder(
      'menu',
      0,
      categoryFolders,
      'bookmarksMenuFolder',
      'menu________',
      2
    );
    const toolbarRoot = makeFolder('toolbar', 1, [], 'toolbarFolder', 'toolbar_____', 3);
    const unfiledRoot = makeFolder('unfiled', 3, [], 'unfiledBookmarksFolder', 'unfiled_____', 5);
    const mobileRoot = makeFolder('mobile', 4, [], 'mobileFolder', 'mobile______', 6);

    return {
      guid: 'root________',
      title: '',
      index: 0,
      dateAdded: nowMicros,
      lastModified: nowMicros,
      id: 1,
      typeCode: 2,
      type: 'text/x-moz-place-container',
      root: 'placesRoot',
      children: [menuRoot, toolbarRoot, unfiledRoot, mobileRoot]
    };
  }

  private createSubcategoryFolder(
    subcategory: Subcategory,
    subcategoryIndex: number,
    createBookmarks: (links: Link[]) => FirefoxBookmarkNode[],
    createFolder: (
      title: string,
      index: number,
      children?: Array<FirefoxFolderNode | FirefoxBookmarkNode>
    ) => FirefoxFolderNode
  ): FirefoxFolderNode | null {
    const bookmarks = createBookmarks(subcategory.items);
    if (bookmarks.length === 0) {
      return null;
    }

    return createFolder(
      subcategory.name || `Folder ${subcategoryIndex + 1}`,
      subcategoryIndex,
      bookmarks
    );
  }

  private normalizeUrl(url: string): string | null {
    const trimmed = (url ?? '').trim();
    if (!trimmed) {
      return null;
    }

    try {
      const parsed = new URL(trimmed);
      return parsed.toString();
    } catch {
      return null;
    }
  }
}
