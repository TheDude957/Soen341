import { useEffect, useState } from "react";
import { getProducts } from "../firebaseService";
import ProductCard from "./ProductCard";

function Products(props) {
  const [getProduct, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      products.forEach((product) => {
        setProducts((prev) => [...prev, product]);
      });
    });
  }, []);

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
