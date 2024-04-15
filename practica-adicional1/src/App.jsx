import Products from "./components/products/Products";

const App = () => {
  const products = ["table", "couch", "chair1", "chair2"];
  return (
    <>
      <h2>Products:</h2>
      <Products products={products} />
    </>
  );
};

export default App;
