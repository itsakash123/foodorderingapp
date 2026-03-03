import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";


import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//props is jS object
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus=useOnlineStatus();
    
  const {loggedInUser}=useContext(userContext);
 // console.log(loggedInUser)
  //selector
  //subscribing to the store using selector
  const cartItems=useSelector((store)=>
    store.cart.items

  );
  //console.log(cartItems)
   
   

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-3">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold ">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
