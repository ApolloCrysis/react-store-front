import { Backdrop, CircularProgress } from "@mui/material";

export const PageLoadingIndicator = () => {
  return (
    <Backdrop
      sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
