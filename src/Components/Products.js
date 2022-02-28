import { DownloadDone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getProducts, searchProduct } from "../firebaseService";
import ProductCard from "./ProductCard";

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
    <>
      <ul className="list-grid">
        {getProduct.map((prod) => {
          return (
            <li class="list-in-grid">
              <ProductCard
                price={prod.price}
                id={prod.id}
                category={prod.category}
                name={prod.name}
              ></ProductCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Products;
