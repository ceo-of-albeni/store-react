import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../../styles/ProductsList.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className="inputs">
      <h3>Add Product</h3>

      <TextField
        id="outlined-basic"
        label="Title"
        name="name"
        onChange={handleInp}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Description"
        name="description"
        onChange={handleInp}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Price"
        name="price"
        onChange={handleInp}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Picture"
        name="picture"
        onChange={handleInp}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Type"
        name="type"
        onChange={handleInp}
        variant="outlined"
      />
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}>
        Save
      </Button>
    </div>
  );
};

export default AddProduct;
