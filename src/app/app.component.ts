import { Component, inject, computed } from '@angular/core';
import { CategorySectionComponent, QuickNavComponent, SpotlightComponent } from './components';
import { LinksService } from './services/links.service';
import { BookmarkExportService } from './services/bookmark-export.service';
import { Category } from './models/link.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategorySectionComponent, QuickNavComponent, SpotlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly linksService = inject(LinksService);
  private readonly bookmarkExportService = inject(BookmarkExportService);

  title = 'Link Dashboard';

  /** Get all non-empty categories */
  readonly categories = this.linksService.nonEmptyCategories;

  /** Total number of links for display */
  readonly totalLinks = this.linksService.totalLinkCount;

  /** Total number of categories for display */
  readonly totalCategories = computed(() => this.categories().length);

  /** TrackBy function for categories */
  trackCategory(index: number, category: Category): string {
    return category.category;
  }

  exportFirefoxBookmarks(): void {
    const categories = this.categories();
    const content = this.bookmarkExportService.createFirefoxBookmarksJson(categories);
    const filename = this.bookmarkExportService.createExportFilename();

    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
}
