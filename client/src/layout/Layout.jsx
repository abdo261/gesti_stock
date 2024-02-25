import React, { useState } from "react";
import "./layout.css";

import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const Layout = () => {
    const [showSidebar,setShowSidebar]= useState(true)
    const toggleSidbare = ()=>setShowSidebar(!showSidebar)
  return (
    <>
    <main className={showSidebar ? "space-toggle" : null}>
       <Sidebar show={showSidebar} toggleShow={toggleSidbare} />
        <div className="content">
          <Outlet />
        </div>
        
        </main>
    </>
  );
};

export default Layout;
