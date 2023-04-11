import { useContext, useState } from "react";
import { AppBar, Typography, Box, Menu, MenuItem, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { CartContext } from "src/context/CartContext";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";

export const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  return (
    <AppBar position="sticky" sx={{ marginBottom: "3rem" }}>
      <Toolbar>
        <Link
          to="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Storefront
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {navItems.map((navItem) => (
              <MenuItem key={navItem.title} onClick={handleCloseNavMenu}>
                <Link
                  to={navItem.href}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center">{navItem.title}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {navItems.map((navItem) => (
            <Button
              key={navItem.title}
              href={navItem.href}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {navItem.title}
            </Button>
          ))}
        </Box>
        <Tooltip title="Cart">
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={totalItems} color="warning">
                <ShoppingCartIcon color={"action"} sx={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
