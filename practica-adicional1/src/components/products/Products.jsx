import Product from "../product/Product";

const Products = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <Product key={index} name={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
