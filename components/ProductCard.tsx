import Image from "next/image";
import type { Product } from "../types";
import Stack from "./Stack";
import Text from "./Text";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Stack gap={6}>
      <Image src={product.image} width={400} height={400} alt="" />
      <Text color="light" size={20} weight="bold">
        {product.title}
      </Text>
      <Text size={14}>{product.description}</Text>
      <Text color="text-500" size={14}></Text>
    </Stack>
  );
};

export default ProductCard;
