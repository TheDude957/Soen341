
import { useEffect, useState } from "react";
import { getProducts , searchProduct} from "../firebaseService";
import ProductCard from "./ProductCard";

/*
Display all items in the store
*/


function Products(props) {
  const [getProduct, setProducts] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  
  function notify1(n) {
    props.notifyHomePage(n);
  }



  useEffect(() => {
    
    console.log("is Search " + isSearched + props.searchValue);
    if (!isSearched) {
      getProducts().then((values) => {
        values.forEach((value) => {
          setProducts((oldArray) => [...oldArray, value]);
        });
      });
    }
    else{
        searchProduct(props.searchValue).then((values) => {
          values.forEach((value) => {
            setProducts((oldArray) => [...oldArray, value]);
          });
        });

    }

    // clean up function to clean array of redundant products
    return () => {
      if (props.searchValue === "") {
        setIsSearched(false);
      } else {
        setIsSearched(true);
      }
      setProducts([]);
  }

  }, [props.searchValue]);

  return (
    <div className="products">
      {getProduct.map((product) => {
        return (
          
          <ProductCard 
            currProd = {props.getCurrProd}

            price={product.price}
            id={product.id}
            category={product.category}
            title={product.title}
            description={product.description}
            picture={product.picture}
            notify = {notify1}
          ></ProductCard>
          
        );
      })}
    </div>
  );
}
export default Products;
