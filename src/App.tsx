import "./styles.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoadingIndicator } from "./components/LoadingIndicators/PageLoadingIndicator";

const HomeComponent = lazy(() => import("./pages/Home"));
const ProductsComponent = lazy(() => import("./pages/Products"));
const ProductComponent = lazy(() => import("./pages/Product"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoadingIndicator />}>
        <Routes>
          <Route index path="/" element={<HomeComponent />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/product/:id" element={<ProductComponent />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
