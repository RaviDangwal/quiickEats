import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex justify-around shadow-lg">
      <img className="w-52 ml-10 p-5" src={logo} alt="" />
      <div className="text-white flex justify-center items-center ">
        © 2024 Ravi Dangwal Technologies Pvt. Ltd
      </div>
      <div className="flex text-white mt-8">
        <ul className="m-2 ml-14">
          <Link to="/contact">
            <h1 className="font-bold">Contact us</h1>
          </Link>
          <li>Help & support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
        <ul className="m-2 ml-14">
          <h1 className="font-bold">We deliver to:</h1>
          <li>Pune</li>
          <li>Dehradun</li>
          <li>Mumbai</li>
          <li>Delhi</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
