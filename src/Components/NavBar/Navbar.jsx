import  { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.paddingTop = "244px";
      console.log(isOpen);
    } else {
      document.body.style.paddingTop = "100px";
      console.log(isOpen);
    }

    return () => {
      document.body.style.paddingTop = "100px";
    };
  }, [isOpen]);
  return (
    <nav className=" bg-[#2C3E50] py-8 px-6 left-0 right-0 top-0 fixed z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-3xl font-bold uppercase">
            Start Framework
          </Link>
          <ul className="space-x-5 lg:flex hidden ">
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menu lg:hidden " onClick={() => toggleMenu()}>
            <i className="fa-solid fa-bars text-2xl text-white transition-all duration-300 cursor-pointer hover:text-gray-300 "></i>
          </div>
        </div>
        {isOpen ? (
          <ul className="space-y-5 mt-4 ml-3 duration-300 lg:hidden ">
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300 ">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300 ">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="text-white pb-1 text-md transition-all font-bold uppercase  hover:text-gray-300 duration-300 ">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "bg-teal-500 rounded-md p-2" : "p-2";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
