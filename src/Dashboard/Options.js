import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

function Options() {
  return (
    <div className="h-[40%] w-full flex justify-center items-center">
      <div className="h-[90%] w-[90%] flex flex-col rounded-2xl  bg-white">
        <div className="h-[20%] w-full flex justify-start items-center ">
          <h2 className="text-lg font-bold pl-4">
            Build tomorrow using technology
          </h2>
        </div>
        <div className="h-[40%] w-full flex justify-center  relative items-center">
          <div className="h-[60%] w-[90%] rounded-3xl bg-[#3e53a0]">
            <Avatar
              className="absolute top-[11%] left-5"
              sx={{ bgcolor: deepPurple[50], color: "blue" }}
            >
              N
            </Avatar>
            <h2 className="text-white absolute left-[30%] top-[35%]">
              NEET counselling
            </h2>
          </div>
        </div>
        <div className="h-[40%] w-full  flex justify-center  relative items-center">
          <div className="h-[60%] w-[90%] rounded-3xl bg-orange-600">
            <Avatar
              className="absolute top-[11%] left-5"
              sx={{ bgcolor: deepPurple[50], color: "blue" }}
            >
              E
            </Avatar>
            <h2 className="text-white absolute left-[30%] top-[35%]">Events</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
