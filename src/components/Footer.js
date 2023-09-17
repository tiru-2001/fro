import { Box, Button, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          p: "10px",

          background: "black",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: "100%",
        }}
        aria-label="footer"
      >
        <Stack direction={"row"} spacing={3}>
          <Button variant="text" sx={{ color: "white" }} size="large">
            About us
          </Button>
          <Button variant="text" sx={{ color: "white" }} size="large">
            Contact us
          </Button>
          <Button variant="text" sx={{ color: "white" }} size="large">
            MoreAbout us
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
