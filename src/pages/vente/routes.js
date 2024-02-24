import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Vente from "./Vente";
import { DetailsVente, EditeVente } from ".";

export const VenteRoutes = (
  <Route path="/ventes" element={<Layout />}>
    <Route index element={<Vente />} />
    <Route path="/ventes/modifier/:id" element={<EditeVente />} />
    <Route path="/ventes/details/:id" element={<DetailsVente />} />
  </Route>
);
