import React from "react";
import { CreateVente } from ".";
import List from "./List";
import { FaCartPlus } from "react-icons/fa";
import { BiHide} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../redux/slices/togglSlice";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Product = () => {
  const dispatch = useDispatch();
  const { showCreateVente } = useSelector((state) => state.toggle);
  const toggleCreate = () => dispatch(toggleActions.toogleCreateVente());
  return (
    <div className="d-flex flex-column gap-3">
      <div className=" d-flex justify-content-between px-2 align-items-center">
        <h1 className="fw-bolder ">
          <FaHandHoldingDollar /> Ventes:
        </h1>{" "}
        <button className="btn btn-light" onClick={toggleCreate}>
          {showCreateVente ? <BiHide size={30} /> : <FaCartPlus size={30} />}
        </button>
      </div>

      {showCreateVente && <CreateVente />}
      <List />
    </div>
  );
};

export default Product;
