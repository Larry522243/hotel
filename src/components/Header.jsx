import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "../css/Header.module.css";

const Header = () => {
  const { nav } = styles;
  return (
    <>
      <ul className={nav}>
        <li>
          <NavLink to="/">首頁</NavLink>
        </li>
        <li>
          <NavLink to="Member">會員</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
