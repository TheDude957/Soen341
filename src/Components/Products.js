
import { useEffect , useState} from "react";
import { getProducts } from "../firebaseService";
import ProductCard from "./ProductCard";

function Products() {
  const [product, setProducts] = useState([]);

  

  useEffect(() => {
    console.log("but Im here!");
    getProducts().then((values) => {
        console.log(values);
        values.forEach((value) => {
            console.log(value);
         // setProducts(value);
        });
      });

  },[])

console.log("its me");

  return (
    <>
      
    </>
  );
  
}

export default Products;
