import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './actions/products.actions';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());

  },[]);

  const products=useSelector((state)=>state.products);
  console.log("getting date",products);
  return (
    <div className="App">
      <h1>Products from Thunk</h1>
      {products.map((product)=>{
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={"https://"+product.imageUrl} alt={product.name}/>
            </div>
        );
      })}
     
    </div>
  );
}

export default App;
