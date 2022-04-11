import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
import { getProducts, GetCurrentUserCart } from "../firebaseService";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

/*
Cart of User
Return all items inside the Cart of the User
*/

function Cart(props) {
	const [getProduct, setProducts] = useState([]);

	const [productsCart, setProductsCart] = useState([]);

	function signalCartFunc(n) {
		props.signalApp(n);
	}

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


  /**
   * Function returns jsx for the items found in the users cart stored in storage
   */
  function loggedInUserCart() {
    return (
      <div className="products">
        {getProduct
          .filter((product) => productsCart.includes(product.id))
          .map((product) => {
            return (
              <CartProduct
                signalCart = {signalCartFunc}
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
/**
 * 
 * @returns Function generates jsx for items in the local storage
 */
  function visitorCart() {
    let prev = JSON.parse(localStorage.getItem('cart'));
    if (prev == null) prev = [];

		return prev.map((product) => {
			return (
				<CartProduct
					signalCart={signalCartFunc}
					price={product.price}
					id={product.id}
					category={product.category}
					name={product.name}
					description={product.description}
					picture={product.picture}
					setProductsCart={setProductsCart}></CartProduct>
			);
		});
	}

	return (
		<div className="products">
			{props.user == "visitor" ? visitorCart() : loggedInUserCart()}
			<Button to="/purchasepage">
				<h1>Checkout</h1>
			</Button>
		</div>
	);
}

export default Cart;
