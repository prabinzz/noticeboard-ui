import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const login = useSelector((state) => state.login);
  return (
    <nav className="w-full flex justify-between h-16 bg-slate-300 items-center px-10">
      <div className="text-2xl">LOGO</div>
      <div className="flex">
        <Link to="/">
          <li className="list-none">Home</li>
        </Link>
        <Link to="/login">
          <li className="list-none ml-2">Login</li>
        </Link>
        <Link to="/admin">
          <li className="list-none ml-2">Admin</li>
        </Link>
      </div>
      <div>
        <div className="px-4 py-2 bg-white shadow-sm rounded-md">
          {login.user.email}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
