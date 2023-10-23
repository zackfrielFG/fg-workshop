import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Product } from "@/types";
import { useEffect, useState } from "react";
import api from "@/api";
import Stack from "@/components/Stack";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import Rating from "@/components/Rating";

type Props = {
  product: Product;
};

export const getStaticProps: GetStaticProps<
  Props,
  { product: string }
> = async ({ params }) => {
  const product = await api.product.fetch(params?.product!);

  return {
    props: { product },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const ProductPage: NextPage<Props> = ({ product }) => {
  const [inStock, setInStock] = useState<boolean>(false);

  useEffect(() => {
    api.product
      .fetch(product.handle)
      .then((productData) => setInStock(productData.inStock));
  }, [product.handle]);

  return (
    <Stack>
      <ProductCard product={product} />
      <Rating value={5} />
      <AddToCart inStock={inStock} />
    </Stack>
  );
};

export default ProductPage;
