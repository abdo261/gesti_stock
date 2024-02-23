import React from "react";
import Input from "../../components/small/Input";
import Btn from "../../components/small/Btn";
import { FcAddImage } from "react-icons/fc";
import SelectObj from "../../components/small/SelectObject";


const Create = () => {
  return (
    <div className="container w-100 text-center ">
      <form className="create-container p-3 shadow border rounded-4 text-start">
        <Input
          className="form-control"
          classParent="py-2"
          placeholder="Nom de Produits"
        />
        <div className="w-100 row">
          <div className="col-md-6 col-sm-12 d-flex align-items-start flex-column gap-2">
            <Input
              className="form-control"
              classParent="py-2 w-100"
              placeholder="Prix"
            />
            <Input
              className="form-control"
              classParent="py-2 w-100"
              placeholder="Stock"
            />
            <Input
              className="form-control"
              classParent="py-2 w-100"
              placeholder="TVA %"
            />
            <div className="d-flex justify-content-start flex-nowrap align-items-center gap-1 ">
              <SelectObj
                titleOptions="Sans catégorie"
                className="form-select"
              />
              {/* <Link to="/categories" className="btn btn-primary btn-sm fw-bold">Ajouter Categorie</Link> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-start flex-column image-container">
            <img src="/Rectangle.png" className="image-create img-fluid" alt="produit" />

            <div className="d-flex justify-content-center">
              {" "}
              <label htmlFor="img-create" className="img-create-label">
                {" "}
                <FcAddImage size={30} />
              </label>{" "}
              <input type="file" id="img-create" />
            </div>
          </div>
        </div>

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
