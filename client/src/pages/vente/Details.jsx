import React from "react";
import { BsEye} from "react-icons/bs";

const Details = () => {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <h1 className="fw-bolder d-flex align-items-center gap-2 ms-2">
          {" "}
          <BsEye />
          Produit 1:
        </h1>
        <div className="container w-100 text-center ">
          <form className="create-container p-3 shadow border rounded-4 text-start">
            <div className="row w-100">
              <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-start flex-column image-container">
                <img src="/Rectangle.png" className="image-create img-fluid" alt="produit"  />
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center flex-column">
                <div className="d-flex flex-nowrap align-items-baseline gap-3 my-2 ">
                  <span className="text-secondary fw-bold">Prix:</span>{" "}
                  <span className="fs-3 fw-bold ">300 DH</span>
                </div>
                <div className="d-flex flex-nowrap align-items-baseline gap-3 my-2 ">
                  <span className="text-secondary fw-bold">Nom:</span>{" "}
                  <span> Produit 1</span>
                </div>

                <div className="d-flex flex-nowrap align-items-baseline gap-3 my-2 ">
                  <span className="text-secondary fw-bold">Stock:</span>
                  <span class="badge text-bg-danger fs-6">0 unité </span>
                  {/* <span class="badge text-bg-success fs-6">30 unité</span> */}
                  {/* <span class="badge text-bg-warning fs-6">10 unité</span> */}
                </div>
                <div className="d-flex flex-nowrap align-items-baseline gap-3 my-2 ">
                  <span className="text-secondary fw-bold">Categorie:</span>{" "}
                  <span className="d-flex flex-nowrap align-items-center gap-2">
                    {" "}
                    Category 1 <div className="square"></div>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
