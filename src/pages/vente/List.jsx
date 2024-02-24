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
         
          <Input
            className="form-control"
            placeholder="Rechercher par le nom"
          />
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
          <th>N°</th>
        
          <th>Produits</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
        
          <td>
            <span class="badge text-bg-success fs-6">10</span>
          </td>
          <td>
            <span class="badge text-bg-info fs-6">600 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
             
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
          <td> 2</td>
       
          <td>
            <span class="badge text-bg-success fs-6 ">10</span>
          </td>
          <td>
            <span class="badge text-bg-info fs-6 ">1200 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
           
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
            3
             </td>
         
          <td>
            <span class="badge text-bg-success fs-6">1 </span>
          </td>
          <td>
            <span class="badge text-bg-info fs-6"> 12 DH</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
          
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
