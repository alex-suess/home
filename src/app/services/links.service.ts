import { Injectable, signal, computed } from '@angular/core';
import { Category, Link, SearchResult, Subcategory } from '../models/link.model';
import { LINKS_DATA } from '../data/links.data';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private readonly categories = signal<Category[]>(LINKS_DATA);

  /**
   * Get all categories
   */
  readonly allCategories = computed(() => this.categories());

  /**
   * Get category names for navigation
   */
  readonly categoryNames = computed(() => 
    this.categories().map(cat => cat.category)
  );

  /**
   * Get all links flattened into a single array with category context
   */
  readonly allLinks = computed(() => {
    const results: SearchResult[] = [];
    
    for (const category of this.categories()) {
      // Add direct items
      for (const link of category.items) {
        results.push({
          link,
          categoryName: category.category
        });
      }
      
      // Add subcategory items
      if (category.subcategories) {
        for (const subcategory of category.subcategories) {
          for (const link of subcategory.items) {
            results.push({
              link,
              categoryName: category.category,
              subcategoryName: subcategory.name
            });
          }
        }
      }
    }
    
    return results;
  });

  /**
   * Get total count of all links
   */
  readonly totalLinkCount = computed(() => this.allLinks().length);

  /**
   * Search links by query string
   * Searches in title, description, and URL
   */
  searchLinks(query: string): SearchResult[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    
    return this.allLinks().filter(result => {
      const { link } = result;
      return (
        link.title.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm) ||
        link.url.toLowerCase().includes(searchTerm)
      );
    });
  }

  /**
   * Get a category by name
   */
  getCategoryByName(name: string): Category | undefined {
    return this.categories().find(cat => cat.category === name);
  }

  /**
   * Get links from a specific category (direct items only)
   */
  getCategoryLinks(categoryName: string): Link[] {
    const category = this.getCategoryByName(categoryName);
    return category?.items ?? [];
  }

  /**
   * Get subcategories from a specific category
   */
  getSubcategories(categoryName: string): Subcategory[] {
    const category = this.getCategoryByName(categoryName);
    return category?.subcategories ?? [];
  }

  /**
   * Check if a category has any content (items or subcategories with items)
   */
  categoryHasContent(category: Category): boolean {
    if (category.items.length > 0) {
      return true;
    }
    
    if (category.subcategories) {
      return category.subcategories.some(sub => sub.items.length > 0);
    }
    
    return false;
  }

  /**
   * Get categories that have content (non-empty)
   */
  readonly nonEmptyCategories = computed(() => 
    this.categories().filter(cat => this.categoryHasContent(cat))
  );

  /**
   * Generate a slug from category name for use in IDs and anchors
   */
  getCategorySlug(categoryName: string): string {
    return categoryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Get favicon URL for a link
   * Uses custom icon if provided, otherwise fetches from Google
   */
  getFaviconUrl(link: Link): string {
    if (link.icon) {
      return link.icon;
    }
    
    try {
      const url = new URL(link.url);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=32`;
    } catch {
      return '';
    }
  }

  /**
   * Get the first letter of a link title for fallback favicon
   */
  getFaviconFallback(link: Link): string {
    return link.title.charAt(0).toUpperCase();
  }
}
