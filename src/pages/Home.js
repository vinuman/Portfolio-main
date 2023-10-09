import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../images/A cartoon of a  1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="px-8 flex max-w-[1536px] mx-auto">
        <div className="pt-8 pb-8  mb-16 w-[50%]">
          <img
            className="w-[100%] h-[50%] rounded-t-lg border"
            src={homeImage}
          ></img>
          <div className="w-[100%] flex flex-col items-end justify-between ">
            <button
              onClick={() => navigate("/projects")}
              className=" w-[100%] h-[74px] bg-gradient-to-r from-blue-600 via-white-700 to-blue-400 text-white font-bold text-[24px] opacity-90 tracking-wider hover:text-[28px]"
            >
              Projects
            </button>
            <button className=" w-[100%] h-[74px] bg-gradient-to-r from-red-600 via-white-700 to-red-400 text-white font-bold text-[24px] opacity-90 tracking-wider hover:text-[28px] rounded-b-md">
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
