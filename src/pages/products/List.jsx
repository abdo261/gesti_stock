import React from "react";
import Input from "../../components/small/Input";
import { Link } from "react-router-dom";
import { BsEye, BsPencilSquare, BsTrash } from "react-icons/bs";
import Btn from "../../components/small/Btn";
const List = () => {
  return (
    <div className="w-100 container">
      <div className="list-container p-3 shadow border rounded-4">
        <div className="py-3">
          {" "}
          <Input
            className="form-control"
            placeholder="Rechercher par le nom"
          />{" "}
        </div>
        <Table />
      </div>
    </div>
  );
};

export default List;

const Table = () => {
  return (
    <table className="table table-hover fw-bold">
      <thead>
        <tr className="fw-bolder  table-info">
          <th>Nom</th>
        
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Produits 1 </td>
        
          <td>
            <span class="badge text-bg-success fs-6">30000</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                to={`/produits/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                <BsEye />
              </Link>
              <Link
                to={`/produits/modifier/${1}`}
                className="btn btn-outline-warning btn-sm btn-action"
              >
                {" "}
                <BsPencilSquare />
              </Link>
              <Btn
                icon={<BsTrash />}
                className="btn btn-outline-danger btn-sm btn-action"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Produits 2</td>
       
          <td>
            <span class="badge text-bg-warning fs-6 ">10</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                to={`/produits/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                {" "}
                <BsEye />
              </Link>
              <Link
                to={`/produits/modifier/${1}`}
                className="btn btn-outline-warning btn-sm btn-action"
              >
                {" "}
                <BsPencilSquare />
              </Link>
              <Btn
                icon={<BsTrash />}
                className="btn btn-outline-danger btn-sm btn-action"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            Produits 3
             </td>
         
          <td>
            <span class="badge text-bg-danger fs-6">0 </span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                to={`/produits/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                {" "}
                <BsEye />
              </Link>
              <Link
                to={`/produits/modifier/${1}`}
                className="btn btn-outline-warning btn-sm btn-action"
              >
                {" "}
                <BsPencilSquare />
              </Link>
              <Btn
                icon={<BsTrash />}
                className="btn btn-outline-danger btn-sm btn-action"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
