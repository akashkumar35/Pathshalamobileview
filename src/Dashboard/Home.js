import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import Welcome from "./Welcome";
import Options from "./Options";
import Info from "./Info";
import Events from "./Events";
import Advertisment from "./Advertisment";
import { Box, Drawer, Typography } from "@mui/material";
import News from "./News";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

function Home() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <>
      <div className="h-screen w-screen  flex flex-col">
        <div className="h-[10%] w-full flex justify-between items-center">
          <div className="h-[80%] w-[20%] flex justify-center items-center">
            <GiHamburgerMenu
              className="text-3xl text-black"
              onClick={() => setisDrawerOpen(true)}
            />
          </div>
          <div className="h-[80%] w-[20%] flex justify-center items-center">
            <Avatar
              alt="Travis Howard"
              sx={{ width: 50, height: 50 }}
              src="/static/images/avatar/2.jpg"
            />
          </div>
        </div>
        <div className="h-[90%] w-full">
          <div className="h-full w-full bg-[#eceef0] overflow-auto overflow-x-hidden">
            <Welcome />
            <Options />
            <Info />
            <Events />
            <Advertisment />
            <News />
          </div>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width="250px" role="presentation">
          <Typography component="div">
            <div className="h-screen flex justify-center items-center ">
              <div className="h-[95%] w-[40%] bg-blue-500 rounded-2xl flex flex-col">
                <div className="h-[20%] w-full flex justify-center items-center">
                  <AiFillHome className="text-3xl text-white" />
                </div>
                <div className="h-[10%] w-full flex justify-center items-start">
                  <FaUserAlt className="text-2xl text-white" />
                </div>
              </div>

              <div className="h-[95%] rounded-2xl w-[60%] bg-blue-600"></div>
            </div>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Home;
