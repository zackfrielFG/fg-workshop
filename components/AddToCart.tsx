type Props = {
  inStock: boolean;
};

const AddToCart: React.FC<Props> = ({ inStock }) => {
  return (
    <button style={{ padding: "10px", cursor: "auto" }} disabled={!inStock}>
      {inStock ? "Add to cart" : "Out of stock"}
    </button>
  );
};

export default AddToCart;
