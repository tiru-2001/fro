import React, { useState } from "react";
import { Formfields } from "../components/commoncompo.js";
import { Box, Stack, Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addata = () => {
  let navigate = useNavigate();
  const [inputvalue, setinputvalue] = useState({
    name: "",
    age: "",
    usn: "",
    course: "",
    section: "",
  });
  const handleinputs = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  console.log(inputvalue);
  const addata = async () => {
    try {
      const addataresult = await axios.post(
        "api/v1/students/addata",
        inputvalue
      );
      if (!addataresult) {
        toast.error(addataresult.message);
      } else {
        console.log(addataresult);
        toast.success("data added");
        navigate("/fetchdata");
      }
    } catch (e) {
      toast.error(e.message);
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
            "linear-gradient(to left, #ffffff, #f3ebff, #ecd6fa, #ebbff2, #eea7e4)",
        }}
      >
        <Typography variant="h4" color={"success"}>
          Add Data
        </Typography>
        <Stack direction={"column"} spacing={1}>
          <Formfields
            types={"text"}
            placeholders={"Enter the name"}
            names={"name"}
            handleinput={handleinputs}
            valueobject={inputvalue.name}
          />
          <Formfields
            types={"number"}
            placeholders={"Enter the age"}
            names={"age"}
            handleinput={handleinputs}
            valueobject={inputvalue.age}
          />
          <Formfields
            types={"text"}
            placeholders={"Enter the usn"}
            names={"usn"}
            handleinput={handleinputs}
            valueobject={inputvalue.usn}
          />

          <Formfields
            types={"text"}
            placeholders={"Enter the course"}
            names={"course"}
            handleinput={handleinputs}
            valueobject={inputvalue.course}
          />

          <Formfields
            types={"text"}
            placeholders={"Enter the section"}
            names={"section"}
            handleinput={handleinputs}
            valueobject={inputvalue.section}
          />

          <Button color="success" onClick={addata} variant="contained">
            Addata
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Addata;
