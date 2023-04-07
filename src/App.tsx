import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import "./styles.css";

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
      </Routes>
    </Layout>
  );
}
