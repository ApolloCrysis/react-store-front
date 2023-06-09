import "./styles.css";
import { Layout } from "./components/Layout";
import { lazy, Suspense } from "react";
import { PageLoadingIndicator } from "./components/LoadingIndicators/PageLoadingIndicator";
import { Route, Routes } from "react-router-dom";

const CartComponent = lazy(() => import("./pages/Cart"));
const HomeComponent = lazy(() => import("./pages/Home"));
const ProductComponent = lazy(() => import("./pages/Product"));
const ProductsComponent = lazy(() => import("./pages/Products"));
const AboutComponent = lazy(() => import("./pages/About"));
const AddProductComponent = lazy(() => import("./pages/AddProduct"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoadingIndicator />}>
        <Routes>
          <Route index path="/" element={<HomeComponent />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/product/:id" element={<ProductComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/add-product" element={<AddProductComponent />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
