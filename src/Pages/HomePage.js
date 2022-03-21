import Products from "../Components/Products";
import ProductSearch from "../Components/ProductSearch";
import { useState } from "react";
import * as React from "react";
/**
 *
 * Main page of the app
 * @returns the serach bar and all the products in the store
 */
function HomePage(props) {
  const [searchItem, setSearchItem] = useState("");

  const getProductInfo = (info) => {
    setSearchItem(info);
  };
  return (
    <>
      <ProductSearch getValue={getProductInfo} />
      <Products searchValue={searchItem} />
    </>
  );
}

export default HomePage;
