export interface Product {
  id?: string;
  image: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  published_date: number;
  category: Array<string>;
  subcategory: string;
  format: Array<string>;
  visible: Boolean;
}
