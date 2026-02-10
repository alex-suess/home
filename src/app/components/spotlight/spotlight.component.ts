import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  ElementRef,
  viewChild,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';
import { LinksService } from '../../services/links.service';
import { SearchResult } from '../../models/link.model';
import { FaviconFallbackDirective } from '../../directives';

interface SpotlightResult extends SearchResult {
  displayCategory: string;
}

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [FaviconFallbackDirective],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotlightComponent implements OnInit, OnDestroy {
  private readonly linksService = inject(LinksService);
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('spotlightInput');
  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;

  /** Whether the spotlight is open */
  readonly isOpen = signal(false);

  /** Current search query */
  readonly query = signal('');

  /** Currently selected index */
  readonly selectedIndex = signal(0);

  /** Search results */
  readonly results = computed<SpotlightResult[]>(() => {
    const q = this.query();
    const allLinks = this.linksService.allLinks();

    // If no query, show first 8 links
    if (!q.trim()) {
      return allLinks.slice(0, 8).map(result => ({
        ...result,
        displayCategory: this.formatDisplayCategory(result)
      }));
    }

    // Split query into words for fuzzy multi-word matching
    const queryWords = q.toLowerCase().split(/\s+/).filter(w => w.length > 0);

    // Filter links that match all query words
    const filtered = allLinks.filter(result => {
      const { link, categoryName, subcategoryName } = result;
      const searchText = `${link.title} ${link.description} ${link.url} ${categoryName} ${subcategoryName || ''}`.toLowerCase();
      return queryWords.every(word => searchText.includes(word));
    });

    // Calculate match score and sort
    const scored = filtered.map(result => ({
      result,
      score: this.getMatchScore(result, queryWords)
    }));

    scored.sort((a, b) => a.score - b.score);

    return scored.map(({ result }) => ({
      ...result,
      displayCategory: this.formatDisplayCategory(result)
    }));
  });

  /** Check if there are no results for a non-empty query */
  readonly hasNoResults = computed(() => {
    const q = this.query().trim();
    return q.length > 0 && this.results().length === 0;
  });

  ngOnInit(): void {
    // Open spotlight on page load (as in original)
    setTimeout(() => this.open(), 100);
  }

  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  }

  /** Format the display category string */
  private formatDisplayCategory(result: SearchResult): string {
    if (result.subcategoryName) {
      return `${result.categoryName} › ${result.subcategoryName}`;
    }
    return result.categoryName;
  }

  /** Calculate match score: 1 = title match (highest), 2 = url match, 3 = description only (lowest) */
  private getMatchScore(result: SearchResult, queryWords: string[]): number {
    const title = result.link.title.toLowerCase();
    const url = result.link.url.toLowerCase();

    const matchesTitle = queryWords.some(word => title.includes(word));
    if (matchesTitle) return 1;

    const matchesUrl = queryWords.some(word => url.includes(word));
    if (matchesUrl) return 2;

    return 3; // Match is in description/category
  }

  /** Open the spotlight */
  open(): void {
    this.isOpen.set(true);
    this.query.set('');
    this.selectedIndex.set(0);

    // Focus input after animation starts
    setTimeout(() => {
      this.inputRef()?.nativeElement.focus();
    }, 100);
  }

  /** Close the spotlight */
  close(): void {
    this.isOpen.set(false);
    this.query.set('');
    this.selectedIndex.set(0);
  }

  /** Toggle the spotlight */
  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  /** Handle backdrop click */
  onBackdropClick(): void {
    this.close();
  }

  /** Handle input changes with debounce */
  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.query.set(value);
      // Reset selection when results change
      this.selectedIndex.set(this.results().length > 0 ? 0 : -1);
    }, 150);
  }

  /** Handle keyboard navigation in input */
  onInputKeydown(event: KeyboardEvent): void {
    const results = this.results();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex() < results.length - 1) {
          this.selectedIndex.update(i => i + 1);
          this.scrollSelectedIntoView();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex() > 0) {
          this.selectedIndex.update(i => i - 1);
          this.scrollSelectedIntoView();
        }
        break;

      case 'Enter':
        event.preventDefault();
        this.navigateToSelected();
        break;
    }
  }

  /** Handle mouse hover on result item */
  onResultHover(index: number): void {
    this.selectedIndex.set(index);
  }

  /** Handle result item click */
  onResultClick(event: Event, result: SpotlightResult): void {
    // Let the default anchor behavior handle navigation
    this.close();
  }

  /** Navigate to the selected result */
  private navigateToSelected(): void {
    const results = this.results();
    const index = this.selectedIndex();

    if (index >= 0 && index < results.length) {
      const result = results[index];
      window.open(result.link.url, '_blank');
      this.close();
    } else if (this.hasNoResults()) {
      // No results - search on Ecosia
      const q = this.query().trim();
      if (q) {
        window.open(`https://www.ecosia.org/search?q=${encodeURIComponent(q)}`, '_blank');
        this.close();
      }
    }
  }

  /** Scroll selected item into view */
  private scrollSelectedIntoView(): void {
    setTimeout(() => {
      const selected = document.querySelector('.spotlight-result-item.selected');
      if (selected) {
        selected.scrollIntoView({ block: 'nearest' });
      }
    }, 0);
  }

  /** Get favicon URL for a result */
  getFaviconUrl(result: SpotlightResult): string {
    return this.linksService.getFaviconUrl(result.link);
  }

  /** Get fallback letter for favicon */
  getFallbackLetter(result: SpotlightResult): string {
    return this.linksService.getFaviconFallback(result.link);
  }

  /** Handle global keyboard shortcuts */
  @HostListener('document:keydown', ['$event'])
  onGlobalKeydown(event: KeyboardEvent): void {
    // Ctrl + / or Ctrl + k to toggle spotlight
    if (event.ctrlKey && event.key === '/' || event.key === 'k') {
      event.preventDefault();
      this.toggle();
      return;
    }

    // Escape to close
    if (event.key === 'Escape' && this.isOpen()) {
      event.preventDefault();
      this.close();
    }
  }

  /** TrackBy function for results */
  trackResult(index: number, result: SpotlightResult): string {
    return result.link.url;
  }
}
