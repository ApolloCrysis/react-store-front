import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { API_URL } from "src/constants";
import { Link, useParams } from "react-router-dom";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { type Product as ProductType } from "../types/product";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {product && (
        <Container maxWidth="lg">
          <Grid container>
            <Box
              display="flex"
              alignItems="center"
              mt={10}
              sx={{
                margin: "auto",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Grid item xs={12} md={6} mt={10}>
                <img
                  src={product.image}
                  alt={`product/${id}`}
                  width={"190px"}
                />
              </Grid>
              <Grid item xs={12} my={7}>
                <Box
                  component="div"
                  mt={5}
                  sx={{
                    border: "solid 1px #dfdfdf",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Typography variant="h6" color="text.secondary" mb={4}>
                    {product.title}
                  </Typography>
                  <Box component="div">
                    <Typography
                      variant="body1"
                      color="primary"
                      fontWeight={700}
                      mr={1}
                    >
                      Category:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={400}
                    >
                      {product.category}
                    </Typography>
                  </Box>
                  <Box component="div">
                    <Typography
                      component="p"
                      variant="body1"
                      color="primary"
                      fontWeight={700}
                      mr={1}
                    >
                      Description:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={400}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                  <Box component="div">
                    <Typography
                      variant="body1"
                      color="primary"
                      fontWeight={700}
                      sx={{ lineHeight: 3 }}
                      mr={1}
                    >
                      Price:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={400}
                    >
                      ${product.price}
                    </Typography>
                  </Box>
                  <Box component="div" display="flex" alignItems="center">
                    <Typography
                      variant="body1"
                      color="primary"
                      fontWeight={700}
                      mr={1}
                    >
                      Rating:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={400}
                    >
                      {product.rating.rate}
                    </Typography>
                    <Rating
                      sx={{ marginLeft: 1 }}
                      name="half-rating-read"
                      defaultValue={product.rating.rate}
                      precision={0.1}
                      readOnly
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {product.rating.count} reviews
                  </Typography>

                  <Box display="flex" justifyContent="space-between">
                    <Button
                      onClick={() => alert("Added to cart")}
                      variant="contained"
                      endIcon={<AddIcon />}
                    >
                      Add to cart
                    </Button>
                    <Link
                      to="/products"
                      style={{
                        display: "flex",
                        width: "fit-content",
                        marginTop: "1rem",
                        color: "grey",
                        textDecoration: "none",
                      }}
                    >
                      <ArrowBackIcon />
                      <Typography>Back to Results</Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};
