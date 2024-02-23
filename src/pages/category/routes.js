import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Category from "./Category";
import { DetailsCategory, EditeCategory } from ".";

export const CategoryRoutes = (
  <Route path="/categories" element={<Layout />}>
    <Route index element={<Category />} />
    <Route path="/categories/modifier/:id" element={<EditeCategory />} />
    <Route path="/categories/details/:id" element={<DetailsCategory />} />
  </Route>
);
