import { useContext, useState } from "react";
// import { LOGO_URL } from "../../utils/constants";
import logo from "../../assets/logos.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../src/utils/useOnlineStatus";
import UserContext from "../../src/utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to a store using selector hook

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-evenly shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-[160px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 ">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 ">
            <Link to="/cart">
              <span className="font-bold px-2">{cartItems.length}</span>
              <ShoppingCart />
            </Link>
          </li>
          <button
            // className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-1 px-4 rounded shadow-lg transform hover:scale-105 transition duration-300 "
            className="px-3 p-b"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-bold px-3 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
