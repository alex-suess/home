import { Component, ChangeDetectionStrategy, input, computed, signal } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-link-card',
  standalone: true,
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkCardComponent {
  /** The link data to display */
  readonly link = input.required<Link>();
  
  /** Animation delay index for staggered entrance */
  readonly animationIndex = input<number>(0);
  
  /** Whether this is the first focusable link in the category */
  readonly isFirstLink = input<boolean>(false);

  /** Track if favicon failed to load */
  readonly faviconError = signal(false);

  /** Computed favicon URL */
  readonly faviconUrl = computed(() => {
    const linkData = this.link();
    if (linkData.icon) {
      return linkData.icon;
    }
    try {
      const url = new URL(linkData.url);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
    } catch {
      return '';
    }
  });

  /** Computed fallback letter for favicon */
  readonly fallbackLetter = computed(() => 
    this.link().title.charAt(0).toUpperCase()
  );

  /** Computed animation delay style */
  readonly animationDelay = computed(() => {
    const index = this.animationIndex();
    // Cap delay at 0.5s for better UX
    const delay = Math.min(0.1 + index * 0.05, 0.5);
    return `${delay}s`;
  });

  /** Handle favicon load error - show fallback letter */
  onFaviconError(): void {
    this.faviconError.set(true);
  }
}
