import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div class="menubar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/introduce">Introduce</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menubar;
