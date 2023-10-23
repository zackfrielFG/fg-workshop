import { productData } from "@/data/products";

export async function GET(request: Request) {
  return Response.json(productData);
}
