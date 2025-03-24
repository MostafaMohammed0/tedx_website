import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
