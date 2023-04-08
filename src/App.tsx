import "./styles.css";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { Route, Routes } from "react-router-dom";

/* 
  Lazy loading harder than I thought: 
  https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
*/

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}
