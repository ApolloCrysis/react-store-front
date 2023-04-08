import { Box, CircularProgress } from "@mui/material";

const DataLoadingIndicator = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default DataLoadingIndicator;
