/**
 * Represents a single link item with its metadata
 */
export interface Link {
  title: string;
  url: string;
  description: string;
  icon?: string;
}

/**
 * Represents a subcategory containing a group of related links
 */
export interface Subcategory {
  name: string;
  items: Link[];
}

/**
 * Represents a top-level category with direct items and optional subcategories
 */
export interface Category {
  category: string;
  items: Link[];
  subcategories?: Subcategory[];
}

/**
 * Search result containing the link and its category context
 */
export interface SearchResult {
  link: Link;
  categoryName: string;
  subcategoryName?: string;
}
