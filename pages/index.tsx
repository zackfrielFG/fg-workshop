import type { GetStaticProps, NextPage } from "next";
import type { Product } from "../types";
import Link from "next/link";
import api from "@/api";
import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";

type Props = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products: Product[] = await api.product.list();

  return {
    props: { products },
  };
};

const HomePage: NextPage<Props> = ({ products }) => {
  return (
    <Grid>
      {products.map((product, index) => (
        <Link key={index} href={`/product/${product.handle}`}>
          Hello
          <ProductCard product={product} />
        </Link>
      ))}
    </Grid>
  );
};

export default HomePage;
