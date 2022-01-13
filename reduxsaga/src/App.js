import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/products.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products);

  console.log("getting data", products);
  return (
    <div className="App">
      <h1>Products from SAGA</h1>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={"https://" + product.imageUrl} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;