import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavComponent = (user) => {
  const [isLoggedIn, setIsLoggedIn] = useState(user.authenticated || false);

  const navigate = useNavigate([]);

  console.log("In Nav Component", user);

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
    <div className="heading-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" />
      </div>
      <div className="rightside">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Aboutus">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>{" "}
          <button
            className="log-btn"
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
