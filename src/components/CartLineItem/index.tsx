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
import { CartItem } from "../../types/cart";
import AddIcon from "@mui/icons-material/Add";

type CartLineItemProps = {
  item: CartItem;
  increaseAmount: (id: number) => void;
};

export const CartLineItem = ({ item, increaseAmount }: CartLineItemProps) => {
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
        </CardActions>
      </CardContent>
    </Card>
  );
};
