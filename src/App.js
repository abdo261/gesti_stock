import {  Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { CategoryRoutes } from "./pages/category/routes";
import { ProductRoutes } from "./pages/products/routes";

function App() {
  return (
    <>
   <Routes>
    {/* <Route path='/' element={<Navigate to="/categories" />} /> */}
    {CategoryRoutes}
    {ProductRoutes}
   </Routes>
    </>
  );
}

export default App;
