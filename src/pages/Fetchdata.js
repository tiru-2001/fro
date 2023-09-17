import { Grid, Paper, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Cards } from "../components/commoncompo.js";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Fetchdata = () => {
  const [sedata, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/v1/students/fetchdata");

      if (!result) {
        toast.error("there is not data");
      } else {
        console.log(result);
        setdata(result.data.data);
        toast.success("data fetched successfully");
      }
    } catch (e) {
      toast.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Paper
        sx={{
          padding: "10px 10px",

          margin: "10px 0px",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          sx={{
            marginLeft: "0px",
            margin: "0px",
            padding: "0px",
          }}
          rowSpacing={2}
          columnSpacing={2}
        >
          {sedata.map((data, ind) => {
            return (
              <Grid key={ind} item md={3}>
                <Cards
                  age={data.age}
                  course={data.course}
                  name={data.name}
                  section={data.section}
                  usn={data.usn}
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Fetchdata;
