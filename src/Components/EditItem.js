import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { storage } from "../Setup";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { EditProduct } from "../firebaseService.js";
/*
This Component is used to add an item to firebae
Returns a form 
*/
const EditItem = ({ currentItem, setCurrentItem }) => {
  /*
 State for item information
 */
  const categories = ["Electronics", "Furniture", "Clothes", "Toys"];
  const [title, setTitle] = useState(currentItem.title);
  const [description, setDescription] = useState(currentItem.description);
  const [price, setPrice] = useState(currentItem.price);
  const [category, setCategory] = useState(currentItem.category);
  const [image, setImage] = useState(null);

  /*
  Check if the form is completed before sanding the information of item to the database
  */
  const formHandler = (e) => {
    e.preventDefault();
    EditProduct({
      title: title,
      price: price,
      id: currentItem.id,
      category: category,
      picture: currentItem.picture,
      description: description,
    });
    uploadFiles(image);

    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage(null);
  };

  /*
Upload a function in firebase storage
 */
  const uploadFiles = (image) => {
    //
    if (!image) return;

    const storageRef = ref(storage, `Images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    if (image != null) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
            EditProduct({
              title: title,
              price: price,
              id: currentItem.id,
              category: category,
              picture: URL,
              description: description,
            });
          });
        }
      );
    } else {
    }
  };

  return (
    <div className="container">
      <div style={{ paddingTop: 20 }}>
        <h1>Edit Product</h1>
      </div>
      <hr></hr>

      <div style={{ paddingTop: 15 }}>
        <label>Product Title*</label>

        <TextField
          type="text"
          className="form-control"
          required
          variant="outlined"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></TextField>
      </div>

      <div style={{ paddingTop: 15 }}>
        <label>Product Description*</label>

        <TextField
          type="text"
          className="form-control"
          required
          variant="outlined"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></TextField>
      </div>
      <div style={{ paddingTop: 15 }}>
        <label>Product Price*</label>

        <TextField
          type="number"
          className="form-control"
          required
          variant="outlined"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></TextField>
      </div>
      <div style={{ paddingTop: 15 }}>
        <label>Product Category*</label>

        <TextField
          select
          className="form-control"
          required
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {categories.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{ paddingTop: 15 }}>
        <label>Upload Image*</label>

        <TextField
          type="file"
          className="form-control"
          required
          variant="outlined"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></TextField>
      </div>

      <div style={{ paddingTop: 15 }}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={formHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditItem;
