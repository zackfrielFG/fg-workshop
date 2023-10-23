export interface Schedule {
  date: string;
  start: string;
  end: string;
}

export interface Store {
  id: string;
  title: string;
  image: string;
  description: string;
  address: string;
}

export interface Product {
  handle: string;
  title: string;
  description: string;
  inStock: boolean;
  image: string;
}
