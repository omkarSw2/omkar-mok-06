import { Route, Routes } from "react-router-dom";
import React from "react";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Blogs from "../pages/Blogs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Blogs />} />
    </Routes>
  );
};

export default AllRoutes;
