import { Product, Schedule, Store } from "./types";

const urlBase = process.env.VERCEL_URL
  ? "https://" + process.env.VERCEL_URL
  : "http://localhost:3000";

const api = {
  product: {
    list: async (): Promise<Product[]> =>
      fetch(`${urlBase}/api/products`).then((res) => res.json()),
    fetch: async (handle: string): Promise<Product> =>
      fetch(`${urlBase}/api/products/${handle}`).then((res) => res.json()),
  },
};

export default api;
