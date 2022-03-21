import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
import { getProducts, GetCurrentUserCart } from "../firebaseService";

/*
Cart of User
Return all items inside the Cart of the User
*/

function Cart() {
  const [getProduct, setProducts] = useState([]);

  const [productsCart, setProductsCart] = useState([]);

  /*
  Get the Cart of the User
  */
  async function getUserCart() {
    await GetCurrentUserCart().then((cartItems) => {
      if (cartItems !== undefined) {
        setProductsCart(Object.values(cartItems));
        console.log("CartItems: ", Object.values(cartItems));
      }
    });
  }

  useEffect(() => {
    getProducts().then((products) => {
      products.forEach(async (product) => {
        setProducts((prev) => [...prev, product]);
        console.log("Value of products : ", products);
      });
    });
  }, []);

  useEffect(() => {
    getUserCart();
  }, []);

  return (
    <div className="products">
      {getProduct
        .filter((product) => productsCart.includes(product.id))
        .map((product) => {
          return (
            <CartProduct
              price={product.price}
              id={product.id}
              category={product.category}
              name={product.name}
              description={product.description}
              picture={product.picture}
              setProductsCart={setProductsCart}
            ></CartProduct>
          );
        })}
    </div>
  );
}

export default Cart;
