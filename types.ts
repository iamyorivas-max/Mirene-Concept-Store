
export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  imageUrl?: string;
  highlight?: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  imageUrl: string;
}

export interface DesignSuggestion {
  item: string;
  reason: string;
  style: string;
}
