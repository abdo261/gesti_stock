import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { BsAward, BsList, BsX, BsBoxArrowInLeft } from "react-icons/bs";
import { FaShoppingCart, FaChartLine } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Sidebar = ({ show, toggleShow }) => {
  const closeIcon = show ? <BsX size={30} /> : <BsList size={30} />;
  const logoutIcon = <BsBoxArrowInLeft size={23} />;
  const Links = [
    {
      name: "Categories",
      link: "/categories",
      icon: BsAward,
      show: true,
    },
    {
      name: "Produits",
      link: "/produits",
      icon: FaShoppingCart,
      show: true,
    },
    {
      name: "Ventes",
      link: "/ventes",
      icon: FaHandHoldingDollar,
      show: true,
    },
    {
      name: "Stocks",
      link: "/stocks",
      icon: FaChartLine,
      show: true,
    },
  ];

  return (
    <>
      <header className={` header ${show ? "space-toggle" : ""}`}>
        <div className="header-toggle" onClick={toggleShow}>
          {closeIcon}
        </div>
        <div className="text-dark fw-bold">
          {" "}
          <span className="d-flex align-items-center gap-2 fs-5">
            {" "}
            abdellah bachikh
            {/* <FaRegCircleUser size={30} /> */}
            <img src="/avatar.png" className="image-profile" alt="user-avatar"/>
          </span>{" "}
        </div>
      </header>

      <aside className={show ? "sidebar show " : "sidebar"}>
        <nav className="nav">
          <div>
            <Link
              to="/"
              className="nav-logo d-flex align-items-center justify-content-center"
            >
              <div className="text text-dark fw-bolder text-center">
                {show && (
                  <>
                    <img src="/logo.png" className="imag-logo" alt="logo" />
                    <p className="fs-4">GestiStock</p>{" "}
                  </>
                )}
              </div>
            </Link>

            <div className="nav-list">
              {Links.map(
                (link, index) =>
                  link.show && (
                    <NavLink
                      to={link.link}
                      className="nav-link-iteme d-flex align-items-center fw-bold"
                      key={index}
                    >
                      {<link.icon className="nav-link-icon" size={25} />}{" "}
                      {/* Render the Bootstrap icon directly */}
                      <span className="nav-link-name">{link.name}</span>
                    </NavLink>
                  )
              )}
            </div>
          </div>

          <span
            to="/logout"
            className="nav-link-iteme  d-flex align-items-center fw-bold"
          >
            {logoutIcon}
            <span className="nav-link-name">Logout</span>
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
