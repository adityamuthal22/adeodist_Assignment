import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth.action";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-200 p-4 flex justify-between">
      <ul className="flex space-x-4 justify-between">
        <li className="text-[30px]">
          <Link to={"/"}> {<BsGithub />}</Link>
        </li>
        <li>
          <Link to="/repos" className="text-blue-500">
            Trending Repos
          </Link>
        </li>
      </ul>
      <div className="flex gap-6">
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogout} className="text-red-500 text-[22px]">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="text-green-500 text-[22px]">
              Login
            </Link>
          </div>
        )}
        <button
          onClick={themeToggle}
          type="button"
          className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ${
            theme === "dark"
              ? "dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              : ""
          }`}
        >
          {theme === "dark" ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
