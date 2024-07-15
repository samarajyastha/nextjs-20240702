export type Product = {
  id?: string;
  name: string;
  brand: string;
  category: string;
  price: number;
};

export type ProductsQuery = {
  limit?: string;
};
