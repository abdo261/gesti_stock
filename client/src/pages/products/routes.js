import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Product from "./Product";
import { DetailsProduct, EditeProduct } from ".";

export const ProductRoutes = (
  <Route path="/produits" element={<Layout />}>
    <Route index element={<Product />} />

    <Route path="/produits/modifier/:id" element={<EditeProduct />} />
    <Route path="/produits/details/:id" element={<DetailsProduct />} />
  </Route>
);
