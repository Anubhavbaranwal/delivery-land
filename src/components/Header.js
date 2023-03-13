import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavComponent = (user) => {
  const [isLoggedIn, setIsLoggedIn] = useState(user.authenticated || false);

  const navigate = useNavigate([]);

  console.log("In Nav Component", user);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleLogin = () => {
    console.log("isLoggedIn", isLoggedIn);
    setIsLoggedIn(!isLoggedIn);

    let params = !user.authenticated
      ? { state: { authenticated: false } }
      : {
          state: {
            authenticated: false,
            msg: "You have logged out of Delivery land. ",
          },
        };
    navigate("/login", params);
  };

  return (
    <div className="flex justify-between ">
      <div className="w-24">
        <img src={logo} alt="Logo" />
      </div>
      <div className="rightside">
        <ul className="flex py-5">
          <li className="px-2  hover:bg-yellow-400 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2  hover:bg-yellow-400 rounded">
            <Link to="/Aboutus">About</Link>
          </li>
          <li className="px-2  hover:bg-yellow-400 rounded">
            <Link to="/instamart">Contact</Link>
          </li>
          <li className="px-2  hover:bg-yellow-400 rounded">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>{" "}
          <button
            className="px-2  hover:bg-yellow-400 rounded"
            onClick={() => {
              toggleLogin();
            }}
          >
            {" "}
            {isLoggedIn ? "Logout" : "Login"}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};
export const Header = (state) => {
  return (
    <div className="header">
      <NavComponent {...state} />
    </div>
  );
};

export default Header;
