import { productData } from "@/data/products";

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  return Response.json(
    productData
      .filter((product) => {
        return product.handle === params.handle;
      })
      .pop()
  );
}
