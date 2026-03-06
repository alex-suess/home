import { 
  Component, 
  ChangeDetectionStrategy, 
  inject, 
  signal, 
  PLATFORM_ID,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LinksService } from '../../services/links.service';

@Component({
  selector: 'app-quick-nav',
  standalone: true,
  templateUrl: './quick-nav.component.html',
  styleUrl: './quick-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickNavComponent implements OnInit, OnDestroy {
  private readonly linksService = inject(LinksService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private scrollListener: (() => void) | null = null;
  private isManualScroll = false;

  /** All category names for navigation */
  readonly categoryNames = this.linksService.categoryNames;

  /** Currently active category (based on scroll position) */
  readonly activeCategory = signal<string | null>(null);
  /** Mobile menu open state */
  readonly isMenuOpen = signal(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      // Set initial active category
      this.updateActiveCategoryOnScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  /**
   * Setup scroll listener to update active category based on scroll position
   */
  private setupScrollListener(): void {
    let ticking = false;
    
    this.scrollListener = () => {
      if (!ticking && !this.isManualScroll) {
        window.requestAnimationFrame(() => {
          this.ngZone.run(() => {
            this.updateActiveCategoryOnScroll();
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  /**
   * Update active category based on current scroll position
   */
  private updateActiveCategoryOnScroll(): void {
    const categories = this.categoryNames();
    const navHeight = 60; // Approximate height of sticky nav
    const scrollY = window.scrollY + navHeight + 100; // Add offset for better UX

    // Find the category section that's currently most visible
    for (let i = categories.length - 1; i >= 0; i--) {
      const section = document.getElementById(`category-${i}`);
      if (section && section.offsetTop <= scrollY) {
        this.activeCategory.set(categories[i]);
        return;
      }
    }

    // If no section found, set first category as active
    if (categories.length > 0) {
      this.activeCategory.set(categories[0]);
    }
  }

  /**
   * Scroll to the specified category section with smooth animation
   */
  scrollToCategory(categoryName: string, index: number): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sectionId = `category-${index}`;
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Mark as manual scroll to prevent scroll listener from overriding
      this.isManualScroll = true;
      this.activeCategory.set(categoryName);

      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });

      // Re-enable scroll listening after animation completes
      setTimeout(() => {
        this.isManualScroll = false;
        // Focus the first link card
        const firstLink = section.querySelector<HTMLElement>('[data-first-link="true"]');
        if (firstLink) {
          firstLink.focus();
        }
      }, 500);

      if (this.isMobileViewport()) {
        this.closeMenu();
      }
    }
  }

  /**
   * Handle keyboard navigation
   */
  onKeydown(event: KeyboardEvent, categoryName: string, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.scrollToCategory(categoryName, index);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  private isMobileViewport(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return window.innerWidth < 768;
  }

  /**
   * Check if a category is currently active
   */
  isActive(categoryName: string): boolean {
    return this.activeCategory() === categoryName;
  }

  /**
   * TrackBy function for categories
   */
  trackCategory(index: number, categoryName: string): string {
    return categoryName;
  }
}
