import { useEffect, useState } from "react";
import { getProducts , addProduct} from "../firebaseService";
import ProductCard from "./ProductCard";


function Products() {
  const [getProduct, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((values) => {
      values.forEach((value) => {
        setProducts((oldArray) => [...oldArray, value]);
      });
    });
  }, []);

  return (
    <>
      <ul className = "list-grid">
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
