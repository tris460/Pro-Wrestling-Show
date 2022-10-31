export interface User {
  id?: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  favorites: Array<string>;
  products: Array<string>;
}
