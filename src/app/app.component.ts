import { Component, inject, computed } from '@angular/core';
import { CategorySectionComponent, QuickNavComponent, SpotlightComponent } from './components';
import { LinksService } from './services/links.service';
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
}
