import React from "react";
import Input from "../../components/small/Input";
import Btn from "../../components/small/Btn";
import SearchSelect from "../../components/small/SearchSelect";
import { IoBagAdd } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaCommentsDollar } from "react-icons/fa";

const Create = () => {
  return (
    <div className="container w-100 text-center ">
      <form className="create-container p-3 shadow border rounded-4 text-start">
        <div className="w-100 row g-2">
          <div className="col-md-6 col-sm-12 d-flex align-items-start flex-column gap-2">
            <SearchSelect
              options={[
                "produit 1",
                "produit 2",
                "produit 3",
                "roduit 1",
                "produit 2",
                "produit 3",
                "produit 1",
                "produit 2",
                "produit 3",
                "produit 1",
                "pduit 2",
                "produit 3",
                "prduit 1",
                "produit 2",
                "produit 3",
              ]}
            />
            <div className="d-flex justify-content-start gap-3 w-100 align-items-center">
              <div className="d-flex justify-content-center gap-1 align-items-center">
                <IoIosArrowBack size={25} />
                <Input
                  type="number"
                  placeholder="Nomber"
                  className="form-control"
                  defaultValue={1}
                />
                <IoIosArrowForward size={25} />
              </div>
              <Btn
                icon={<IoBagAdd size={25} />}
                type="button"
                className="btn btn-primary btn-sm fw-bold "
              />
            
            </div>
            <div class="border rounded pt-1 bg-primary-subtle w-100"></div>
              <Input
                type="number"
                placeholder="le montant payé"
                className="form-control"
              />
          
            <div className="d-flex justify-content-between gap-1 w-100 align-items-center">  <span class="badge text-bg-primary fs-6 ">3 unité</span> <span class="badge text-bg-warning fs-6  "><FaCommentsDollar size={27}/> 33 DH </span></div>
            <div className="d-flex justify-content-center w-100 mt-auto">
              <span class="badge w-100 text-bg-dark fs-4 ">
                totale prix : 600 DH
              </span>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-start flex-column image-container">
            <Table />
          </div>
        </div>

        <div className="w-100 my-2 ">
          {" "}
          <Btn
            type="button"
            className="btn btn-success w-100  fw-bold"
            text="Ajouter"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;

const Table = () => {
  return (
    <table className="table table-hover fw-bold">
      <thead>
        <tr className="fw-bolder  table-info">
          <th>Nom</th>

          <th>Prix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Produits 1 <span class="badge text-bg-success ms-2 ">3</span>
          </td>

          <td>
            {" "}
            <span class="badge text-bg-info fs-6 ">10 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Btn className="btn btn-outline-danger btn-close p-2 btn-sm btn-action" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Produits 2<span class="badge text-bg-success  ms-2 ">10</span>{" "}
          </td>

          <td>
            {" "}
            <span class="badge text-bg-info fs-6 ">40 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Btn className="btn btn-outline-danger btn-close p-2 btn-sm btn-action" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            Produits 3<span class="badge text-bg-success  ms-2 "> 4</span>
          </td>

          <td>
            {" "}
            <span class="badge text-bg-info fs-6 ">120 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Btn className="btn btn-outline-danger btn-close p-2 btn-sm btn-action" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
