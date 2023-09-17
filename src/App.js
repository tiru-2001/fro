import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Addata,
  Fetchdata,
  Home,
  Login,
  Notfound,
  Parent,
  Register,
} from "./pages/commonpage.js";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addata" element={<Addata />} />
            <Route path="/fetchdata" element={<Fetchdata />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
