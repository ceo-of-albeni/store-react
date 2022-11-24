import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardMedia component="img" height="140" image={item.picture} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <IconButton size="small" onClick={() => addProductToCart(item)}>
          <AddShoppingCartOutlinedIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
