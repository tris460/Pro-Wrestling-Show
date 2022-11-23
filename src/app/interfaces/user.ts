export interface User {
  id?: string;
  id_auth: string;
  name: string;
  last_name: string;
  favorites: Array<string>;
  products: Array<string>;
  rol: 'admin' | 'user';
}
