import React from "react";
import { Footer, Navbar } from "../components/commoncompo.js";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const Parent = () => {
  return (
    <>
      <Box minHeight={"100vh"}>
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Parent;
