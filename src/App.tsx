import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

//Lazy load pages
const HomeComponent = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  );
}
