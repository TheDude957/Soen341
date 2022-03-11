import Products from "../Components/Products";
import ProductSearch from "../Components/ProductSearch";
import { useState } from "react";
import * as React from "react";

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
