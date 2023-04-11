import { API_URL } from "src/constants";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { type Product } from "../types/product";
import { useEffect, useState } from "react";
import DataLoadingIndicator from "src/components/LoadingIndicators/DataLoadingIndicator";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_URL}/products?limit=8`);
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
    <Box>
      <ImageList cols={4} rowHeight={250} style={{ overflow: "hidden" }}>
        {products.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=50&h=50&fit=crop&auto=format`}
              srcSet={`${item.image}?w=50&h=50&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Home;
