export interface Product {
  id?: string;
  image: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  published_date: string;
  category: Array<string>;
  subcategory: Array<string>;
  format: Array<string>;
  variants: Array<string>;
  visible: Boolean;
}
