import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Ticket from "./components/Ticket";
import AllTicket from "./pages/AllTicket";
import SingleTicket from "./pages/SingleTicket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<PrivateRoute />}>
          <Route path="newticket" element={<Ticket />} />
          <Route path="all-tickets" element={<AllTicket />} />
          <Route path=":id" element={<SingleTicket />} />

        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
