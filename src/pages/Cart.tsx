import { Box, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { CartLineItem } from "../components/CartLineItem";

const Cart = () => {
  const { cartItems, increaseAmount } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Box mt={5}>
        <Typography variant={"body1"}>No items in cart</Typography>
      </Box>
    );
  }

  return (
    <Box mt={10}>
      <Link
        to="/products"
        style={{
          display: "flex",
          width: "fit-content",
          marginTop: "15px",
          color: "#00000099",
          textDecoration: "none",
        }}
      >
        <ArrowBackIcon />
        <Typography>Continue Shopping</Typography>
      </Link>

      {cartItems.map((cartItem) => (
        <CartLineItem
          key={cartItem.id}
          item={cartItem}
          increaseAmount={increaseAmount}
        />
      ))}
      <Box mt={2}>
        <Typography variant="h4">Total: $500</Typography>
      </Box>
    </Box>
  );
};

export default Cart;
