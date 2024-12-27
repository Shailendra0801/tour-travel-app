import React, { useContext, useState } from "react";
import "./Navbar.css";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "./logo-pngg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { user, SignOut } = useContext(AuthContext);

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

        <ul className={`md:flex md:items-center navPhone ${clicked ? "block" : "hidden"}`}>
          {MenuItems.map((item, index) => (
            <li key={index} className="md:my-0 md:ml-1">
              <Link to={item.url} className={`text-gray-800 hover:text-blue-600 ${item.cName}`}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {user && user.displayName ? (
            <div className="flex items-center">
              <span className="mr-4">{user.displayName}</span>
              <button 
                className="bg-red-500 text-white p-1 px-2 rounded relative group" 
                onClick={SignOut}
              > 
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                  Logout
                </span>
              </button>
            </div>
          ) : (
            <Link className="bg-blue-600 text-white py-1 px-6 rounded md:ml-4" to="/login">Log In</Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;