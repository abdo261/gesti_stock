import React from "react";
import Input from "../../components/small/Input";
import Btn from "../../components/small/Btn";

const Create = () => {
  return (
    <div className="container w-100 text-center ">
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

        <div className="w-100 my-2 ">
          {" "}
          <Btn
            type="submit"
            className="btn btn-dark w-100  fw-bold"
            text="Ajouter"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
