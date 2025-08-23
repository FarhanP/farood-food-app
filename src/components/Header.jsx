import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import burgerlogo from "../assets/burgerlogo.png";
import cartIcon from "../assets/shopping-cart-1.png";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("cartIcon", cartIcon); // Should log a string URL

  useEffect(() => {
    console.log("useEffect is called in header");
  }, [btnText]);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between shadow-md items-center px-5 sm:px-8 bg-themePink h-auto relative">
      <div className="logo-section flex items-center">
        <img
          className="w-[60px] h-[60px]  sm:w-[75px] sm:h-[75px] mix-blend-multiply mr-3"
          src={burgerlogo}
          alt="Food logo"
        />
        <h2 className="company-name font-bold text-3xl tracking-wider">
          <Link to="/">Farood</Link>
        </h2>
      </div>

      <nav
        className={`fixed top-0 p-6 text-3xl sm:text-base sm:p-0 left-0 h-full items-center sm:flex-row font-semibold transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }
       transition-transform duration-300 z-50 sm:translate-x-0 sm:relative sm:flex sm:flex-row sm:w-auto sm:h-auto
      `}
      >
        <ul
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col sm:flex-row"
        >
          <li className="sm:px-6 py-6 sm:py-2 px-4 hover:text-themePurple">
            <Link to="/">Home</Link>
          </li>
          <li className="sm:px-6 py-6 px-4 sm:py-2 hover:text-themePurple">
            <Link to="/about">About us</Link>
          </li>
          <li className="sm:px-6 py-6 px-4 sm:py-2 hover:text-themePurple">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="sm:px-6 py-6 px-4  sm:py-2 hover:text-themePurple">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cart-wrapper flex items-center sm:m-0 px-4 py-2"
        >
          <Link to="/cart" className="relative">
            <div className="hidden sm:block">
              <img className="w-6 h-6 mr-3" src={cartIcon} />
              <p className="absolute top-[-10px] right-[2px] bg-themePurple text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </p>
            </div>
            <p className="sm:hidden font-bold text-themePurple">
              Cart ({cartItems.length} items)
            </p>
          </Link>
        </div>
        <button
          className="login-btn rounded border text-center px-5 py-1 sm:py-0.5 mx-4 my-6 sm:mx-0 sm:my-2 text-themePurple border-themePurple hover:bg-themePurple hover:text-white"
          onClick={() => {
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
          }}
        >
          {btnText}
        </button>
        <p className="mx-4 my-4 sm:mx-3 sm:my-0 font-bold">
          {loggedInUser} (User)
        </p>
      </nav>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="ham-menu sm:hidden"
      >
        <img
          className="w-[35px] h-[35px]"
          src="https://img.icons8.com/ios-filled/50/800080/menu--v6.png"
          alt="Menu"
        />
      </button>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-background fixed top-0 left-0 opacity-95 w-full h-full bg-themePink z-40 sm:hidden"
        ></div>
      )}
    </div>
  );
};

export default Header;
