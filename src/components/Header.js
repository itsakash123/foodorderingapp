import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart, Wifi, WifiOff } from "lucide-react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-brand-100/50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-charcoal-900 tracking-tight">
            Foodie<span className="text-brand-400">Hub</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-charcoal-600 hover:text-charcoal-900 font-medium text-sm transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-charcoal-600 hover:text-charcoal-900 font-medium text-sm transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-charcoal-600 hover:text-charcoal-900 font-medium text-sm transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/grocery"
            className="text-charcoal-600 hover:text-charcoal-900 font-medium text-sm transition-colors"
          >
            Grocery
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Online Status */}
          <div className="flex items-center gap-1.5" title={onlineStatus ? "Online" : "Offline"}>
            {onlineStatus ? (
              <Wifi className="w-4 h-4 text-green-500" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-500" />
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1.5 text-charcoal-700 hover:text-charcoal-900 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-400 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* User Name */}
          {loggedInUser && (
            <span className="hidden lg:block text-sm font-medium text-charcoal-600">
              {loggedInUser}
            </span>
          )}

          {/* Login / Sign Up Button */}
          <button
            className="bg-brand-400 hover:bg-brand-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact === "Login" ? "Login / Sign Up" : "Logout"}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
