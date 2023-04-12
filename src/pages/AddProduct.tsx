import { Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Product } from "src/types/product";

const AddProduct = () => {
  const { control, handleSubmit } = useForm<Product>();

  const formSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
  return (
    <Box maxWidth={400}>
      <Box mb={"2rem"}>
        <Typography variant="h5" component="h3">
          Add Product
        </Typography>
      </Box>
      <form onSubmit={formSubmit}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              sx={{ mb: 3 }}
              fullWidth
              variant="outlined"
              label="Title"
              error={error !== undefined}
              helperText={error ? "Title is required" : ""}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mb: 3 }}
              fullWidth
              variant="outlined"
              label="Description"
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mb: 3 }}
              fullWidth
              variant="outlined"
              label="Category"
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mb: 3 }}
              fullWidth
              variant="outlined"
              label="Price"
              type="number"
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mb: 3 }}
              fullWidth
              variant="outlined"
              type="file"
            />
          )}
        />
        <ButtonGroup>
          <Button
            variant="contained"
            size="small"
            type="submit"
            style={{ marginRight: "1rem" }}
          >
            Save
          </Button>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <Button variant="contained" size="small" type="button">
              Back to results
            </Button>
          </Link>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default AddProduct;
