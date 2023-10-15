import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../images/A cartoon of a  1.png";
import homeImage1 from "../images/pexels-photo-3183165.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="p-16 flex justify-between h-[100vh]">
        <div className="mb-16 w-[50%]">
          <img
            className="w-[100%] h-[80%] rounded-lg border"
            src={homeImage1}
          ></img>
        </div>
        {/* RIGHT DIV */}
        <div className="w-[50%] px-16 py-8">
          <h1 className=" text-[3.2rem] font-bold">
            Crafting User Experiences, One line of code at a time
          </h1>
          <p className=" text-[1rem]">
            <span className=" text-[1.8rem]">&lt;&gt;</span> Hi there! I'm Vinu
            Cyril, a front-end developer passionate about creating user-centric
            frontend experience. Discover a portfolio that showcases technical
            prowess in React.js and other front end technologies{" "}
            <span className=" text-[1.4rem]">&lt;/&gt;</span>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
