import { AppBar, Typography, Box, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";

export const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar position="sticky" sx={{ marginBottom: "1rem" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={theme.spacing(2)}
      >
        <Link
          to="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Storefront
          </Typography>
        </Link>
        <Link to="/cart">
          <IconButton>
            <Badge badgeContent={5} color="warning">
              <ShoppingCartIcon color={"action"} sx={{ fontSize: "30px" }} />
            </Badge>
          </IconButton>
        </Link>
      </Box>
    </AppBar>
  );
};