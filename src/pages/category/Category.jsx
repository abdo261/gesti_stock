import React from "react";
import { CreateCategory, ListCategory } from ".";
import { BsAward } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../redux/slices/togglSlice";
import { BiHide} from "react-icons/bi";
import { MdLibraryAdd } from "react-icons/md";
const Category = () => {
  const dispatch = useDispatch();
  const { showCreateCategory } = useSelector((state) => state.toggle);
  const toggleCreate = () => dispatch(toggleActions.toogleCreateCategory());
  return (
    <div className="d-flex flex-column gap-3">
      <div className=" d-flex justify-content-between px-2 align-items-center">
        <h1 className="fw-bolder ">
        <BsAward />
        Categories:
        </h1>{" "}
        <button className="btn btn-light" onClick={toggleCreate}>
          {showCreateCategory ? <BiHide size={30} /> : <MdLibraryAdd size={30} />}
        </button>
      </div>
     
     {showCreateCategory&& <CreateCategory />}
      <ListCategory />   
    </div>
  );
};

export default Category;
