import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";
import { Product } from "../types/product";
import { useEffect, useState } from "react";
import DataLoadingIndicator from "src/components/LoadingIndicators/DataLoadingIndicator";
import { CartContext } from "src/context/CartContext";
import { useContext } from "react";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <DataLoadingIndicator />;
  }

  return (
    <>
      <Box mb={"2rem"} display="flex" justifyContent="space-between">
        <Typography variant="h4">Products</Typography>
        <Link to={"/add-product"} style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="contained"
            type="button"
            endIcon={<AddIcon />}
          >
            Add Product
          </Button>
        </Link>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((productData) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={productData.id}>
              <Paper elevation={3}>
                <Card
                  sx={{
                    transition: "all 0.3s",
                    "&:hover": {
                      transition: " all 0.3s",
                      boxShadow:
                        "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                    },
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/product/${productData.id}`}
                  >
                    <CardMedia component="div">
                      <img
                        src={productData.image}
                        alt={productData.title}
                        loading="lazy"
                        style={{
                          width: "200px",
                          height: "200px",
                          display: "flex",
                          margin: "0 auto",
                          padding: "8px",
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="h3"
                        color="text.secondary"
                        sx={{ padding: "10px" }}
                      >
                        {productData.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="p"
                        className="price"
                      >
                        ${productData.price}
                      </Typography>
                    </CardContent>
                  </Link>
                  <CardActions>
                    <Button
                      size="small"
                      type="button"
                      onClick={() => addToCart(productData)}
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
