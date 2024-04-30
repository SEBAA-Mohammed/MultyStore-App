export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  email_verified_at: string;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
  billboard_url: string;
  logo_url: string;
  email: string;
  tel: string;
  adresse: string;
  header: string;
}

export interface Category {
  id: number;
  name: string;
  url: string;
  store_id: number;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface Unit {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  barcode: string;
  designation: string;
  prix_ht: number;
  tva: number;
  description: string;
  stock: number;
  rating: number;
  images: ProductImage[];
  category: Category;
  brand?: Brand;
  unit?: Unit;
  store?: Store;
}

export interface ProductImage {
  id: number;
  url: string;
}

// export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
//   auth: {
//     user: User;
//   };
//   current: {
//     store: Store;
//     categories: Category[];
//   };
// };

export interface Auth {
  user: User;
}

export type InertiaSharedProps<T = {}> = T & {
  auth: Auth;
  current: {
    store: Store;
    categories: Category[];
  };
};
