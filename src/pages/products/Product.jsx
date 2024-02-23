import React from "react";
import { CreateProduct } from ".";
import List from "./List";
import { FaShoppingCart,FaCartPlus } from "react-icons/fa";
import { BiHide} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../redux/slices/togglSlice";


const Product = () => {
  const dispatch = useDispatch();
  const { showCreateProduct } = useSelector((state) => state.toggle);
  const toggleCreate = () => dispatch(toggleActions.toogleCreateProduct());
  return (
    <div className="d-flex flex-column gap-3">
      <div className=" d-flex justify-content-between px-2 align-items-center">
        <h1 className="fw-bolder ">
          <FaShoppingCart /> Produits:
        </h1>{" "}
        <button className="btn btn-light" onClick={toggleCreate}>
          {showCreateProduct ? <BiHide size={30} /> : <FaCartPlus size={30} />}
        </button>
      </div>

      {showCreateProduct && <CreateProduct />}
      <List />
    </div>
  );
};

export default Product;
