import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import { Link as ReactRouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginlout } from "../reduxfolder/logslice";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const userauth = useSelector((state) => state.loginlogout);

  const isadminauth = useSelector((state) => state.isadminus);
  const dispatch = useDispatch();
  const logout = () => {
    navigate("/login");
    window.reload();
    dispatch(loginlout());
  };

  return (
    <>
      <Box aria-label="navbar">
        <AppBar sx={{ position: "static", background: "gray" }}>
          <Toolbar>
            <Stack spacing={1} direction={"row"} flexGrow={1}>
              <IconButton aria-label="logo" sx={{ background: "white" }}>
                <SchoolSharpIcon />
              </IconButton>
              <Typography variant="h4" color="white">
                StudentData
              </Typography>
            </Stack>
            <Stack aria-label="nav-items" direction={"row"}>
              {!userauth ? (
                <>
                  {isadminauth ? (
                    <Link
                      variant="h1"
                      underline="none"
                      component={ReactRouterLink}
                      sx={{
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        mr: "15px",
                        color: "inherit",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Admin
                    </Link>
                  ) : (
                    <Link
                      variant="h1"
                      underline="none"
                      component={ReactRouterLink}
                      sx={{
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        mr: "15px",
                        color: "inherit",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      User
                    </Link>
                  )}
                </>
              ) : (
                <></>
              )}

              <Link
                variant="h1"
                component={ReactRouterLink}
                sx={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  mr: "15px",
                  color: "inherit",
                  "&:hover": {
                    color: "black",
                  },
                }}
                to="/"
              >
                Home
              </Link>

              {userauth && (
                <>
                  {" "}
                  <Link
                    variant="h1"
                    underline="none"
                    component={ReactRouterLink}
                    sx={{
                      textDecoration: "none",
                      fontSize: "1.2rem",
                      mr: "15px",
                      color: "inherit",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                    to="/register"
                  >
                    Registerrrr
                  </Link>
                  <Link
                    variant="h1"
                    underline="none"
                    component={ReactRouterLink}
                    sx={{
                      textDecoration: "none",
                      fontSize: "1.2rem",
                      mr: "15px",
                      color: "inherit",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              )}

              {!userauth && (
                <Link
                  variant="h1"
                  underline="none"
                  component={ReactRouterLink}
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    mr: "15px",
                    color: "inherit",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                  onClick={logout}
                >
                  Logout
                </Link>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
