import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { CartContext } from "src/context/CartContext";
import { CartItem } from "../../types/cart";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";

type CartLineItemProps = {
  item: CartItem;
};

export const CartLineItem = ({ item }: CartLineItemProps) => {
  const { decreaseAmount, increaseAmount, removeFromCart } =
    useContext(CartContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total: ${(item.quantity * item.price).toFixed(2)}
        </Typography>
        <Box mt={2}>
          <CardMedia>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              style={{
                width: "200px",
                height: "200px",
              }}
            />
          </CardMedia>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {item.quantity}
        </Typography>
        <CardActions>
          <Tooltip title="Add">
            <IconButton size="small" onClick={() => increaseAmount(item.id)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove">
            <IconButton size="small" onClick={() => decreaseAmount(item.id)}>
              <RemoveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton size="small" onClick={() => removeFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </CardContent>
    </Card>
  );
};
