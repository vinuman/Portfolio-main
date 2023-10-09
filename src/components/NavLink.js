import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ title, link }) => {
  const location = useLocation();
  const isActive = location.pathname === `/${link}`;
  return (
    <>
      <a className={`text-[20px] ${isActive ? "underline" : ""}`}>
        <Link to={`/${link}`}>{title}</Link>
      </a>
    </>
  );
};

export default NavLink;
