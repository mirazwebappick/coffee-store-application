import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="text-center py-5">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link className="p-5" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="p-5" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="p-5" to="/signin">
            Login
          </Link>
        </li>
        <li>
          <Link className="p-5" to="/user">
            User Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
