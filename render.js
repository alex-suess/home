function getFaviconUrl(url, customIcon) {
    if (customIcon) return customIcon;
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return '';
    }
  }
  
  function createLinkCard(link, index, isFirst = false) {
    const card = document.createElement('a');
    card.href = link.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'link-card block bg-white rounded-2xl p-5 shadow-sm border border-sand/50 animate-in';
    if (isFirst) {
      card.dataset.firstLink = 'true';
    }
    card.style.animationDelay = `${0.1 + index * 0.05}s`;
    
    const faviconUrl = getFaviconUrl(link.url, link.icon);
    
    card.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-sand/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src="${faviconUrl}" 
            alt="" 
            class="favicon-img w-7 h-7 object-contain"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-terracotta font-heading font-bold text-lg\\'>${link.title.charAt(0)}</span>'"
          >
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="font-heading font-semibold text-charcoal text-lg truncate">${link.title}</h3>
          ${link.description ? `<p class="text-charcoal/50 text-sm truncate">${link.description}</p>` : ''}
        </div>
        <svg class="w-5 h-5 text-charcoal/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </div>
    `;
    
    return card;
  }
  
  function createSubcategorySection(subcategory, subcategoryIndex, isFirstSubcategory = false) {
    const wrapper = document.createElement('div');
    wrapper.className = 'subcategory-section mt-6';
    
    const header = document.createElement('h3');
    header.className = 'subcategory-title font-heading text-lg font-medium text-charcoal/70 mb-4 pl-4 border-l-2 border-terracotta/40 ml-1';
    header.textContent = subcategory.name;
    
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4';
    
    (subcategory.items || []).forEach((link, linkIndex) => {
      const isFirst = isFirstSubcategory && linkIndex === 0;
      grid.appendChild(createLinkCard(link, linkIndex + subcategoryIndex * 3, isFirst));
    });
    
    wrapper.appendChild(header);
    wrapper.appendChild(grid);
    
    return wrapper;
  }

  function createCategorySection(category, categoryIndex) {
    const section = document.createElement('section');
    section.id = `category-${categoryIndex}`;
    section.className = 'animate-in pt-20';
    section.style.animationDelay = `${0.1 + categoryIndex * 0.15}s`;
    
    const header = document.createElement('h2');
    header.className = 'category-title font-heading text-2xl font-semibold text-charcoal mb-6 pb-1';
    header.textContent = category.category;
    
    section.appendChild(header);
    
    // Track if we've marked the first link
    let hasFirstLink = false;
    
    // Render direct items if present
    if (category.items && category.items.length > 0) {  
      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4';
      
      category.items.forEach((link, linkIndex) => {
        const isFirst = !hasFirstLink && linkIndex === 0;
        if (isFirst) hasFirstLink = true;
        grid.appendChild(createLinkCard(link, linkIndex, isFirst));
      });
      
      section.appendChild(grid);
    }
    
    // Render subcategories if present
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach((subcategory, subIndex) => {
        const isFirstSubcategory = !hasFirstLink && subIndex === 0;
        if (isFirstSubcategory) hasFirstLink = true;
        section.appendChild(createSubcategorySection(subcategory, subIndex, isFirstSubcategory));
      });
    }
    
    return section;
  }
  
  function renderQuickNav() {
    const nav = document.getElementById('quick-nav');
    
    if (typeof links === 'undefined' || !Array.isArray(links) || links.length === 0) {
      return;
    }
    
    links.forEach((category, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quick-nav-item';
      button.textContent = category.category;
      button.tabIndex = 0;
      
      const handleActivation = () => {
        const section = document.getElementById(`category-${index}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Focus the first link card after scroll completes
          const firstLink = section.querySelector('[data-first-link="true"]');
          if (firstLink) {
            setTimeout(() => {
              firstLink.focus();
            }, 400);
          }
        }
      };
      
      button.addEventListener('click', handleActivation);
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivation();
        }
      });
      
      nav.appendChild(button);
    });
  }

  function renderLinks() {
    const container = document.getElementById('links-container');
    
    if (typeof links === 'undefined' || !Array.isArray(links)) {
      container.innerHTML = `
        <div class="text-center py-12 text-charcoal/50">
          <p>No links found. Add some links to <code class="bg-sand px-2 py-1 rounded">links.js</code></p>
        </div>
      `;
      return;
    }
    
    links.forEach((category, index) => {
      container.appendChild(createCategorySection(category, index));
    });
  }
  
  // Render on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    renderLinks();
    renderQuickNav();
  });
  