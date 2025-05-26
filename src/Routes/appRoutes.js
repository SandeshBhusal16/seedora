import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";
// import Layout from '../Components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
