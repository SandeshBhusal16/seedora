import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
