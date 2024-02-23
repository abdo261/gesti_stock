import React from "react";
import Input from "../../components/small/Input";
import Btn from "../../components/small/Btn";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Edite = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column gap-3">
      <h1 className="fw-bolder d-flex align-items-center gap-2 ms-2">
        {" "}
        <BsPencilSquare />
         Categorie 1:
      </h1>
      <div className="container w-75 text-center ">
        <form className="create-container p-3 shadow border rounded-4 text-start">
          <Input
            className="form-control"
            classParent="py-2"
            placeholder="Nom de Categorie"
          />
          <Input
            type="color"
            classParent="py-2 d-flex align-items-center gap-4"
            label="choisire le couleur : "
          />

          <div className="w-100 my-2 d-flex justify-content-between ">
            {" "}
            <Btn
              className="btn btn-warning
               fw-bold"
              text="anuller"
              oncklick={() => navigate(-1)}
            />
            <Btn
              type="submit"
              className="btn btn-success fw-bold"
              text="Modifier"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edite;
