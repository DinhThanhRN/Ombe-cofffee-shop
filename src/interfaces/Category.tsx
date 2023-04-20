interface Category {
  icon: string;
  menus: number;
  name: string;
}

interface CategoryData {
  id: string;
  data: Category;
}

export type {Category, CategoryData};
