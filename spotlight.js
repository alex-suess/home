// ===== Spotlight Search =====

let spotlightSelectedIndex = -1;
let spotlightResults = [];
let cachedAllLinks = null;

function getAllLinks() {
  if (cachedAllLinks) return cachedAllLinks;
  if (typeof links === 'undefined' || !Array.isArray(links)) return [];

  cachedAllLinks = links.flatMap(category => {
    const directItems = (category.items || []).map(item => ({
      ...item,
      category: category.category
    }));

    const subcategoryItems = (category.subcategories || []).flatMap(sub =>
      (sub.items || []).map(item => ({
        ...item,
        category: `${category.category} › ${sub.name}`
      }))
    );

    return [...directItems, ...subcategoryItems];
  });

  return cachedAllLinks;
}

function openSpotlight() {
  const backdrop = document.getElementById('spotlight-backdrop');
  const container = document.getElementById('spotlight-container');
  const input = document.getElementById('spotlight-input');

  backdrop.classList.add('active');
  container.classList.add('active');
  input.value = '';
  spotlightSelectedIndex = -1;
  renderSpotlightResults('');

  // Delay focus to allow visibility transition to start
  setTimeout(() => {
    input.focus();
  }, 100);
}

function closeSpotlight() {
  const backdrop = document.getElementById('spotlight-backdrop');
  const container = document.getElementById('spotlight-container');
  const input = document.getElementById('spotlight-input');
  const results = document.getElementById('spotlight-results');

  backdrop.classList.remove('active');
  container.classList.remove('active');
  input.value = '';
  results.innerHTML = '';
  spotlightSelectedIndex = -1;
  spotlightResults = [];
}

function filterLinks(query) {
  const allLinks = getAllLinks();
  if (!query.trim()) return allLinks.slice(0, 8); // Show first 8 when empty

  // Split query into words for fuzzy multi-word matching
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 0);

  // Filter links that match all query words
  const filtered = allLinks.filter(link => {
    const searchText = `${link.title} ${link.description} ${link.url} ${link.category}`.toLowerCase();
    // All query words must appear somewhere in the searchable text
    return queryWords.every(word => searchText.includes(word));
  });

  // Calculate match score: 1 = title match (highest), 2 = url match, 3 = description only (lowest)
  function getMatchScore(link) {
    const title = link.title.toLowerCase();
    const url = link.url.toLowerCase();

    const matchesTitle = queryWords.some(word => title.includes(word));
    if (matchesTitle) return 1;

    const matchesUrl = queryWords.some(word => url.includes(word));
    if (matchesUrl) return 2;

    return 3; // Match is in description/category
  }

  // Sort by score (ascending: 1 first, then 2, then 3)
  return filtered.sort((a, b) => getMatchScore(a) - getMatchScore(b));
}

function renderSpotlightResults(query) {
  const resultsContainer = document.getElementById('spotlight-results');
  spotlightResults = filterLinks(query);
  spotlightSelectedIndex = spotlightResults.length > 0 ? 0 : -1;

  if (spotlightResults.length === 0 && query.trim()) {
    resultsContainer.innerHTML = `
      <div class="spotlight-no-results">
        No links found for "<strong>${escapeHtml(query)}</strong>"
      </div>
      <div class="spotlight-hint">
        <span><kbd>Enter</kbd> search on Ecosia</span>
        <span><kbd>Esc</kbd> to close</span>
      </div>
    `;
    return;
  }

  const resultsHtml = spotlightResults.map((link, index) => {
    const faviconUrl = getFaviconUrl(link.url, link.icon);
    const selectedClass = index === spotlightSelectedIndex ? 'selected' : '';
    return `
      <a href="${link.url}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="spotlight-result-item ${selectedClass}"
         data-index="${index}">
        <div class="w-8 h-8 rounded-lg bg-sand/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src="${faviconUrl}" 
            alt="" 
            class="w-5 h-5 object-contain"
            loading="lazy"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-terracotta font-heading font-bold\\'>${link.title.charAt(0)}</span>'"
          >
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-heading font-semibold text-charcoal truncate">${link.title}</div>
          <div class="text-xs text-charcoal/50">${link.category}</div>
        </div>
        <svg class="w-4 h-4 text-charcoal/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
    `;
  }).join('');

  resultsContainer.innerHTML = resultsHtml + `
    <div class="spotlight-hint">
      <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
      <span><kbd>Enter</kbd> open</span>
      <span><kbd>Esc</kbd> close</span>
    </div>
  `;
}

function updateSpotlightSelection() {
  const items = document.querySelectorAll('.spotlight-result-item');
  items.forEach((item, index) => {
    item.classList.toggle('selected', index === spotlightSelectedIndex);
  });

  // Scroll selected item into view
  const selected = items[spotlightSelectedIndex];
  if (selected) {
    selected.scrollIntoView({ block: 'nearest' });
  }
}

function navigateSpotlightResult() {
  if (spotlightSelectedIndex >= 0 && spotlightSelectedIndex < spotlightResults.length) {
    const link = spotlightResults[spotlightSelectedIndex];
    window.open(link.url, '_blank');
    closeSpotlight();
  } else {
    // No results - search on Ecosia
    const query = document.getElementById('spotlight-input').value.trim();
    if (query) {
      window.open(`https://www.ecosia.org/search?q=${encodeURIComponent(query)}`, '_blank');
      closeSpotlight();
    }
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize spotlight event listeners
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('spotlight-backdrop');
  const input = document.getElementById('spotlight-input');
  const resultsContainer = document.getElementById('spotlight-results');

  // Keyboard shortcut: Ctrl + /
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
      e.preventDefault();
      const container = document.getElementById('spotlight-container');
      if (container.classList.contains('active')) {
        closeSpotlight();
      } else {
        openSpotlight();
      }
    }

    // Escape to close
    if (e.key === 'Escape') {
      closeSpotlight();
    }
  });

  // Close on backdrop click
  backdrop.addEventListener('click', closeSpotlight);

  // Search input handling - Debounced for performance
  let debounceTimeout;
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      renderSpotlightResults(value);
    }, 150);
  });

  // Keyboard navigation in input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (spotlightSelectedIndex < spotlightResults.length - 1) {
        spotlightSelectedIndex++;
        updateSpotlightSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (spotlightSelectedIndex > 0) {
        spotlightSelectedIndex--;
        updateSpotlightSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      navigateSpotlightResult();
    }
  });

  // Mouse hover selection
  resultsContainer.addEventListener('mouseover', (e) => {
    const item = e.target.closest('.spotlight-result-item');
    if (item) {
      spotlightSelectedIndex = parseInt(item.dataset.index, 10);
      updateSpotlightSelection();
    }
  });

  // Open spotlight on page load
  openSpotlight();
});

