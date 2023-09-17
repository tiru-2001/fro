import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Formfields } from "../components/commoncompo.js";
import { Box, Stack, Link, Typography, Button } from "@mui/material";
import axios from "axios";

import { useDispatch } from "react-redux";

import { roless } from "../reduxfolder/isadminslice";
import { loginlout } from "../reduxfolder/logslice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const handleinputs = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const loginform = async () => {
    try {
      let result = await axios.post("/api/v1/login", inputvalue);

      if (!result) {
      } else {
        let datatt = result.data;

        if (datatt.admin === "true") {
          toast.success("admin loggedin");
          dispatch(roless(true));
        } else {
          toast.dark("user loggedin");
          dispatch(roless(false));
        }
        navigate("/");
        dispatch(loginlout());
      }
    } catch (e) {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 126.25px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          background:
            "linear-gradient(to right top, #74777a, #84949b, #91b3b8, #a1d3ce, #baf2dd)",
        }}
      >
        <Typography variant="h3" color={"success"}>
          Login Form
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Formfields
            types={"email"}
            placeholders={"Enter the email"}
            names={"email"}
            handleinput={handleinputs}
            valueobject={inputvalue.email}
          />
          <Formfields
            types={"password"}
            placeholders={"Enter the password"}
            names={"password"}
            handleinput={handleinputs}
            valueobject={inputvalue.password}
          />

          <Link
            variant="body"
            underline="none"
            component={ReactRouterLink}
            to="/register"
          >
            If you not registered then register
          </Link>

          <Button color="success" onClick={loginform} variant="contained">
            login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
