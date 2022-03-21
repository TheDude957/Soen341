import { useEffect, useState } from "react";
import { getProducts , searchProduct} from "../firebaseService";
import ProductCard from "./ProductCard";

/*
Display all items in the store
*/

function Products(props) {
  const [getProduct, setProducts] = useState([]);
  const [isSearched, setIsSearched] = useState(false);



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
            price={product.price}
            id={product.id}
            category={product.category}
            name={product.name}
            description={product.description}
            picture={product.picture}
          ></ProductCard>
        );
      })}
    </div>
  );
}
export default Products;
