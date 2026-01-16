import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Category, Subcategory, Link } from '../../models/link.model';
import { LinkCardComponent } from '../link-card';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [LinkCardComponent],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySectionComponent {

  /** The category data to display */
  readonly category = input.required<Category>();

  /** Index of this category for animation and ID purposes */
  readonly categoryIndex = input<number>(0);

  /** Computed section ID for navigation anchoring */
  readonly sectionId = computed(() => `category-${this.categoryIndex()}`);

  /** Computed section animation delay */
  readonly sectionAnimationDelay = computed(() => {
    const index = this.categoryIndex();
    return `${0.1 + index * 0.15}s`;
  });

  /** Check if this category has direct items */
  readonly hasDirectItems = computed(() => 
    this.category().items && this.category().items.length > 0
  );

  /** Check if this category has subcategories */
  readonly hasSubcategories = computed(() => 
    this.category().subcategories && this.category().subcategories!.length > 0
  );

  /** Get non-empty subcategories */
  readonly nonEmptySubcategories = computed(() => {
    const subcategories = this.category().subcategories;
    if (!subcategories) return [];
    return subcategories.filter(sub => sub.items && sub.items.length > 0);
  });

  /**
   * Track if we should mark first link based on direct items availability
   * First link should only be marked once per category
   */
  readonly firstLinkIsInDirectItems = computed(() => 
    this.hasDirectItems() && this.category().items.length > 0
  );

  /**
   * Get the index of the first subcategory that should have the first link marker
   * Returns -1 if direct items have the first link
   */
  readonly firstSubcategoryWithFirstLink = computed(() => {
    if (this.firstLinkIsInDirectItems()) return -1;
    const subcategories = this.nonEmptySubcategories();
    return subcategories.length > 0 ? 0 : -1;
  });

  /**
   * Determine if a specific link in direct items is the first link
   */
  isFirstDirectLink(linkIndex: number): boolean {
    return this.firstLinkIsInDirectItems() && linkIndex === 0;
  }

  /**
   * Determine if a specific link in a subcategory is the first link
   */
  isFirstSubcategoryLink(subcategoryIndex: number, linkIndex: number): boolean {
    return this.firstSubcategoryWithFirstLink() === subcategoryIndex && linkIndex === 0;
  }

  /**
   * Calculate animation index for direct items
   */
  getDirectItemAnimationIndex(linkIndex: number): number {
    return linkIndex;
  }

  /**
   * Calculate animation index for subcategory items
   * Accounts for direct items and previous subcategory items
   */
  getSubcategoryItemAnimationIndex(subcategoryIndex: number, linkIndex: number): number {
    const directItemsCount = this.category().items?.length ?? 0;
    const previousSubcategoryItems = this.nonEmptySubcategories()
      .slice(0, subcategoryIndex)
      .reduce((total, sub) => total + (sub.items?.length ?? 0), 0);
    
    return directItemsCount + previousSubcategoryItems + linkIndex;
  }

  /**
   * TrackBy function for subcategories
   */
  trackSubcategory(index: number, subcategory: Subcategory): string {
    return subcategory.name;
  }

  /**
   * TrackBy function for links
   */
  trackLink(index: number, link: Link): string {
    return link.url;
  }
}
