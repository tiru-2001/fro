import React, { useState } from "react";

import { Formfields } from "../components/commoncompo.js";
import {
  Box,
  Stack,
  Link,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = (e) => {
  let navigate = useNavigate();
  const [inputvalue, setinputvalue] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: "",
  });
  const handleinputs = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  console.log(inputvalue);
  const submitform = async () => {
    try {
      const result = await axios.post("/api/v1/register", inputvalue);
      console.log(result);
      if (!result) {
        toast.error("user not registered");
        return;
      } else {
        if (result.isadmin) {
          toast.success("admint registered");
        } else {
          toast.dark("user registerd");
        }
        navigate("/login");
      }
    } catch (e) {
      toast.error(e);
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
            "linear-gradient(to right top, #ebeff6, #ded5f2, #e9b5da, #f495a7, #e78063)",
        }}
      >
        <Typography variant="h3" color={"success"}>
          Register Form
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Formfields
            types={"text"}
            placeholders={"Enter the name"}
            names={"name"}
            handleinput={handleinputs}
            valueobject={inputvalue.name}
          />
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
          <FormControl>
            <RadioGroup
              name="isAdmin"
              onChange={handleinputs}
              value={inputvalue.isadminuser}
              row
            >
              <FormControlLabel
                control={<Radio />}
                label="admin"
                value="true"
                aria-label="admin"
                color="secondary"
              />
              <FormControlLabel
                control={<Radio />}
                label="user"
                value="false"
                aria-label="user"
              />
            </RadioGroup>
          </FormControl>
          <Link
            variant="body"
            underline="none"
            component={ReactRouterLink}
            to="/login"
          >
            If you registered then login
          </Link>

          <Button onClick={submitform} color="success" variant="contained">
            Create Account
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
