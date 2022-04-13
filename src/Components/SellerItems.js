import React from "react";
import { DeleteItem, getProducts, GetSellerProducts } from "../firebaseService";
import { useEffect, useState } from "react";
import "../CSS/SellerItems.css";
import { Button } from "@mui/material";
import EditItem from "./EditItem";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const SellerItems = () => {
  const navigate = useNavigate();
  const [getProduct, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);

  async function getSellerItems() {
    await GetSellerProducts().then((items) => {
      if (items !== undefined) {
        setItems(Object.values(items));
        console.log("CartItems: ", Object.values(items));
      }
    });
  }
  async function deleteItem(itemId) {
    await DeleteItem(itemId);
    getSellerItems();
  }

  useEffect(() => {
    getProducts().then((products) => {
      products.forEach((product) => {
        setProducts((prev) => [...prev, product]);
      });
    });
  }, []);
  useEffect(() => {
    getSellerItems();
  }, []);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  function modal() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditItem
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          </Box>
        </Modal>
        ;
      </div>
    );
  }

  return (
    <div>
      <div className="cart-container">
        <div style={{ textAlign: "right", paddingTop: 10 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/profilePage/addItem")}
          >
            Add product
          </Button>
        </div>

        <h2>My Items</h2>
        <div className="titles">
          <h3 className="product-title">Products</h3>
          <h3 className="price">Price</h3>
        </div>
        <div className="cart-items">
          {getProduct &&
            getProduct
              .filter((product) => items.includes(product.id))
              .map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-product">
                    <img src={item.picture} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="cart-product-price">${item.price}</div>

                  <div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setOpen(true);
                        setCurrentItem(item);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() => deleteItem(item.id)}
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      ){open && modal()}
    </div>
  );
};

export default SellerItems;
