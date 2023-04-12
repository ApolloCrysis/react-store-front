import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import ScrollToTop from "./utils/common";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <CartContextProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StrictMode>
          <CssBaseline />
          <ScrollToTop />
          <App />
        </StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </CartContextProvider>
);
