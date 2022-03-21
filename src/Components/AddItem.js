import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { storage } from "../Setup";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addProduct } from "../firebaseService.js";
/*
This Component is used to add an item to firebae
Returns a form 
*/
const AddItem = () => {
  /*
 State for item information
 */
  const categories = ["Electronics", "Furniture", "Clothes", "Toys"];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  /*
 State to track errors
 */
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [imageError, setImageError] = useState(false);

  /*
  Check if the form is completed before sanding the information of item to the database
  */
  const formHandler = (e) => {
    e.preventDefault();
    title === "" ? setTitleError(true) : setTitleError(false);
    description === "" ? setDescriptionError(true) : setDescriptionError(false);
    price === "" || price < 1 ? setPriceError(true) : setPriceError(false);
    category === "" ? setCategoryError(true) : setCategoryError(false);
    image === null ? setImageError(true) : setImageError(false);

    if (
      titleError === false &&
      descriptionError === false &&
      priceError === false &&
      categoryError === false &&
      imageError === false
    ) {
      uploadFiles(image);
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
    } else {
      setTimeout(() => {
        setTitleError(false);
        setDescriptionError(false);
        setPriceError(false);
        setCategoryError(false);
        setImageError(false);
      }, 3000);
    }
  };
  /*
Upload a function in firebase storage
 */
  const uploadFiles = (image) => {
    //
    if (!image) return;
    const storageRef = ref(storage, `Images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("File available at", url);
          addProduct({
            name: title,
            price: price,
            id: 10,
            category: category,
            picture: url,
            description: description,
          });
        });
      }
    );
  };

  return (
    <div className="container">
      <div style={{ paddingTop: 20 }}>
        <h1>Add Products</h1>
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
          error={titleError}
          helperText={titleError ? "Required" : ""}
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
          error={descriptionError}
          helperText={descriptionError ? "Required" : ""}
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
          error={priceError}
          helperText={priceError ? "Required" : ""}
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
          error={categoryError}
          helperText={categoryError ? "Required" : ""}
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
          error={imageError}
          helperText={imageError ? "Required" : ""}
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

export default AddItem;
