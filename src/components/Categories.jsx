import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaFootballBall,
  FaThLarge,
} from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Categories = () => {
   const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 p-3 rounded-md transition duration-200 ${
      isActive ? "bg-green-600 text-white font-semibold" : "hover:bg-gray-200"
    }`;


  return (
    <div className="w-56 h-screen sticky top-0 bg-[#c4b5fd] shadow-md">
      <ul className="flex flex-col p-4 gap-2 mt-10">

         <div className="flex gap-4 mb-10">
      <button
        onClick={() => navigate(-1)} // go back
        className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
      >
        <MdArrowBack className="inline-block w-full m-auto" />
      </button>

      <button
        onClick={() => navigate(1)} // go forward
        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        <MdArrowForward className="inline-block w-full m-auto" />
      </button>
    </div>

        <li className="text-lg font-bold text-green-700 mb-2 ml-3 flex items-center gap-2 ">
          
          <FaThLarge /> Categories
        </li>

        <NavLink to="/product" end className={navLinkClass}>
          <FaThLarge /> All Products
        </NavLink>

        <NavLink to="/product/electronics" className={navLinkClass}>
          <FaLaptop /> Electronics
        </NavLink>

        <NavLink to="/product/fashion" className={navLinkClass}>
          <FaTshirt /> Fashion
        </NavLink>

        <NavLink to="/product/homekitchen" className={navLinkClass}>
          <FaHome /> Home & Kitchen
        </NavLink>

        <NavLink to="/product/sports" className={navLinkClass}>
          <FaFootballBall /> Sports & Outdoors
        </NavLink>
      </ul>
    </div>
  );
};

export default Categories;
