import { FETCH_PRODUCTS, SET_PRODUCTS } from "../types/product.types";

export const fetchProducts = () => {

  return {type:FETCH_PRODUCTS}
  
};

export const setProducts = (products = null )=>{
    if(products){
        return {
            type: SET_PRODUCTS,
            payload:products
        }
    }

    return {
        type: SET_PRODUCTS,
        payload:[],
    }
}
