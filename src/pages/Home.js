import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../images/A cartoon of a  1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="px-8 border flex">
        <div className="pt-8 pb-8 relative mb-16 w-[50%]">
          <img className="w-[100%]  rounded-lg border" src={homeImage}></img>
          <div className="absolute bottom-2  w-[100%] flex flex-col items-end justify-between ">
            <button
              onClick={() => navigate("/projects")}
              className=" w-[100%] h-[74px] bg-blue-600 text-white font-bold text-[24px] opacity-90 tracking-wider"
            >
              Projects
            </button>
            <button className=" w-[100%] h-[74px] bg-red-500 text-white font-bold text-[24px] opacity-90 tracking-wider">
              Resume
            </button>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Home;
