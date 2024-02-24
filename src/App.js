import { Navigate, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { CategoryRoutes } from "./pages/category/routes";
import { ProductRoutes } from "./pages/products/routes";
import { VenteRoutes } from "./pages/vente/routes";

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Navigate to="/categories" />} />
    {CategoryRoutes}
    {ProductRoutes}
    {VenteRoutes}
   </Routes>
    </>
  );
}

export default App;
