import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <>
      <nav className="px-4 py-8">
        {/* LINKS DIV */}
        <div className=" w-[30%] flex justify-around items-center font-semibold">
          <NavLink title="Home" link="" />
          <NavLink title="About" link="about" />
          <NavLink title="Projects" link="projects" />
        </div>
        {/* LINKS DIV ENDS */}
      </nav>
    </>
  );
};

export default NavBar;
