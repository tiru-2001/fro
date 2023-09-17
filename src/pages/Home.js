import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userauth = useSelector((state) => state.loginlogout);
  const isadminauth = useSelector((state) => state.isadminus);
  return (
    <>
      <Box
        aria-label="homeMaincontainer"
        sx={{
          height: "calc(100vh - 126.25px)",
          background:
            "linear-gradient(to bottom, #35393f, #5d6469, #8a9294, #bbc3c3, #f0f6f4)",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",

          width: "100%",
        }}
      >
        <Box
          aria-label="subhomeContainer"
          sx={{
            backdropFilter: "blur(100px)",

            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"column"} spacing={3}>
            {userauth ? (
              <>
                <Typography variant="h1">Welcome</Typography>
              </>
            ) : (
              <>
                {isadminauth ? (
                  <>
                    <Link
                      to="/addata"
                      variant="h6"
                      underline="none"
                      component={ReactRouterLink}
                      sx={{
                        textAlign: "center",
                        textDecoration: "none",
                        p: "8px 10px",
                        color: "white",
                        background: "salmon",
                        borderRadius: "5px",
                      }}
                    >
                      AddData
                    </Link>

                    <Link
                      to="/fetchdata"
                      variant="h6"
                      component={ReactRouterLink}
                      sx={{
                        textAlign: "center",
                        textDecoration: "none",
                        p: "8px 10px",
                        color: "white",
                        background: "salmon",
                        borderRadius: "5px",
                      }}
                    >
                      FetchData
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/fetchdata"
                    variant="h6"
                    component={ReactRouterLink}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      p: "8px 10px",
                      color: "white",
                      background: "salmon",
                      borderRadius: "5px",
                    }}
                  >
                    FetchData
                  </Link>
                )}
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
