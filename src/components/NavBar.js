import React from "react";
import NavLink from "./NavLink";
import github from "../images/icon-github.svg";
import { GitHubSvg } from "./Svgs";
import { FrontEndSvg } from "./Svgs";
import { LinkedinSvg } from "./Svgs";

const NavBar = () => {
  return (
    <>
      <nav className="py-4 px-16 flex justify-between">
        {/* LINKS DIV */}
        <div className=" w-[30%] flex justify-around items-center font-semibold">
          <NavLink title="Home" link="" />
          <NavLink title="About" link="about" />
          <NavLink title="Projects" link="projects" />
        </div>
        {/* LINKS DIV ENDS */}
        {/*  EXTERNAL LINKS DIV */}
        <div className="flex justify-around w-[20%]">
          <a href="https://github.com/vinuman" target="_blank">
            <GitHubSvg className="cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/vinuman"
            target="_blank"
          >
            <FrontEndSvg className="cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinu-cyril-a3936b154/"
            target="_blank"
          >
            <LinkedinSvg className="cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
        </div>
        {/*  EXTERNAL LINKS DIV ENDS */}
      </nav>
    </>
  );
};

export default NavBar;
