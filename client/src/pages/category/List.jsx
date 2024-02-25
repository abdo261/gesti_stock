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
          <th>Color</th>
          <th>Produits</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>les ships </td>
          <td>
            <div className="square"></div>
          </td>
          <td>
            <span class="badge text-bg-success fs-6">30</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                       to={`/categories/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                <BsEye />
              </Link>
              <Link
                className="btn btn-outline-warning btn-sm btn-action"
                to={`/categories/modifier/${1}`}
              >
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
          <td>les ships </td>
          <td>
            <div className="square"></div>
          </td>
          <td>
            <span class="badge text-bg-warning fs-6 ">10</span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                       to={`/categories/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                {" "}
                <BsEye />
              </Link>
              <Link
                className="btn btn-outline-warning btn-sm btn-action"
                to={`/categories/modifier/${1}`}
              >
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
          <td>les ships </td>
          <td>
            <div className="square"></div>
          </td>
          <td>
            <span class="badge text-bg-danger fs-6">0 </span>
          </td>
          <td>
            <div className="d-flex align-items-center justify-content-end gap-1">
              <Link
                      to={`/categories/details/${1}`}
                className="btn btn-outline-primary btn-sm btn-action"
              >
                {" "}
                <BsEye />
              </Link>
              <Link
                className="btn btn-outline-warning btn-sm btn-action"
                to={`/categories/modifier/${1}`}
              >
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
