import React from "react";
import NavLink from "./NavLink";
import github from "../images/icon-github.svg";
import { GitHubSvg } from "./Svgs";
import { FrontEndSvg } from "./Svgs";
import { LinkedinSvg } from "./Svgs";

const NavBar = () => {
  return (
    <>
      <nav className="py-4 px-8 flex justify-between">
        {/* LINKS DIV */}
        <div className=" w-[30%] flex justify-around items-center font-semibold">
          <NavLink title="Home" link="" />
          <NavLink title="About" link="about" />
          <NavLink title="Projects" link="projects" />
        </div>
        {/* LINKS DIV ENDS */}
        {/*  EXTERNAL LINKS DIV */}
        <div className="flex justify-around  w-[20%]">
          <GitHubSvg className="cursor-pointer hover:scale-125" />
          <FrontEndSvg className="cursor-pointer hover:scale-125" />
          <LinkedinSvg className="cursor-pointer hover:scale-125" />
        </div>
        {/*  EXTERNAL LINKS DIV ENDS */}
      </nav>
    </>
  );
};

export default NavBar;
