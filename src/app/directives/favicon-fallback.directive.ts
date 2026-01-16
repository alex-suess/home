import { Directive, ElementRef, HostListener, input } from '@angular/core';

/**
 * Directive that handles favicon load errors by hiding the image
 * and showing a fallback element (typically the next sibling).
 * 
 * Usage:
 * ```html
 * <img [src]="faviconUrl" appFaviconFallback />
 * <span class="fallback">A</span>
 * ```
 * 
 * Or with a custom selector:
 * ```html
 * <img [src]="faviconUrl" appFaviconFallback=".my-fallback" />
 * <span class="my-fallback">A</span>
 * ```
 */
@Directive({
  selector: 'img[appFaviconFallback]',
  standalone: true
})
export class FaviconFallbackDirective {
  /** 
   * Optional CSS selector for the fallback element.
   * If not provided, defaults to the next sibling element.
   */
  readonly fallbackSelector = input<string | null>(null, { alias: 'appFaviconFallback' });

  constructor(private readonly el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError(): void {
    const img = this.el.nativeElement;
    img.style.display = 'none';

    // Find fallback element using selector or default to next sibling
    const selector = this.fallbackSelector();
    const fallback = selector 
      ? img.parentElement?.querySelector(selector)
      : img.nextElementSibling;

    if (fallback instanceof HTMLElement) {
      fallback.style.display = 'flex';
    }
  }
}
