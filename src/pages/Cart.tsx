import { Box, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { CartLineItem } from "../components/CartLineItem";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cartItems, clearCart, totalPriceAmount } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Box mt={5}>
        <Typography variant={"body1"}>No items in cart</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Link
        to="/products"
        style={{
          display: "flex",
          width: "fit-content",
          textDecoration: "none",
          marginBottom: "1rem",
        }}
      >
        <ArrowBackIcon />
        <Typography variant="body1">Continue Shopping</Typography>
      </Link>
      {cartItems.map((cartItem) => (
        <CartLineItem key={cartItem.id} item={cartItem} />
      ))}
      <Box display="flex" pt={"1rem"}>
        <Typography variant="h4">
          Total: ${totalPriceAmount.toFixed(2)}
        </Typography>
        <Box ml={"1rem"}>
          <Button
            variant="contained"
            size="small"
            type="button"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
