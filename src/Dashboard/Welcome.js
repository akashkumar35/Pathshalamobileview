import React from "react";
import img1 from "../assets/asset 1.jpeg";

function Welcome() {
  return (
    <div className="h-[80%] w-full  flex justify-center items-center">
      <div className="h-[95%] w-[90%] rounded-2xl flex flex-col bg-white">
        <div className="h-[12%] w-full flex justify-start items-center">
          <h2 className="text-xl font-bold  pl-5">Welcome! kumar</h2>
        </div>
        <div className="h-[40%] w-full  flex justify-center items-center">
          <img src={img1} className="h-full " />
        </div>
        <div className="h-[30%] w-full  flex justify-start items-center">
          <p1 className="text-start text-gray-600 pl-5">
            Unlock the world of oppoturnities with mycareerpathshala and find
            your dream destination to study abroad
          </p1>
        </div>
        <div className="h-[18%] w-full flex justify-center items-center ">
          <div className="h-[50%] w-[80%] flex justify-center items-center bg-[#3e53a0] rounded-3xl">
            <h2 className="text-lg text-white ">
              Request your career counsellor
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
