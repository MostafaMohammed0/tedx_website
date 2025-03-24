import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RadioGroup from "../components/RadioGroup";
import PaymentForm from "../components/PaymentForm";

function Booking() {
  const [userType, setUserType] = useState("outside");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    nationalID: "",
    idPicture: null,
    idNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idPicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
  };

  return (
    <div className="FormContainer">
      <Navbar />
      <h1 className="booking-title">Book Your Ticket</h1>
      
      <RadioGroup userType={userType} setUserType={setUserType} />
      
      <PaymentForm 
        userType={userType} 
        formData={formData} 
        handleChange={handleChange} 
        handleFileChange={handleFileChange} 
        handleSubmit={handleSubmit} 
      />

      <Footer />
    </div>
  );
}

export default Booking;
