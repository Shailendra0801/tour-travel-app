import React, { useContext, useState } from "react";
import "./Navbar.css";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "./logo-pngg.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { user, SignOut } = useContext(AuthContext);
  console.log(user);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="bg-white shadow-md NavbarItems">
      <div className="container px-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="yooo size-20" />

        <div className="md:hidden " onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`md:flex md:items-center ${clicked ? "block" : "hidden"}`}>
          {MenuItems.map((item, index) => (
            <li key={index} className="my-2 md:my-0 md:ml-4">
              <Link to={item.url} className={`text-gray-800 hover:text-blue-600 ${item.cName}`}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {user && user.displayName ? (
            <div className="flex items-center">
              <span className="mr-4">{user.displayName}</span>
              <button className="bg-red-600 text-white py-1 px-3 rounded" onClick={SignOut}>Log Out</button>
            </div>
          ) : (
            <Link className="bg-blue-600 text-white py-2 px-4 rounded md:ml-4" to="/signup">Sign Up</Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;