import React from "react";
import "../App.css";

function PaymentForm({ userType, formData, handleChange, handleFileChange, handleSubmit }) {
  return (
    <div >
    <form onSubmit={handleSubmit} className="nice-form-group">
      <div className="bracket">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} required />
      </div>

      <div className="bracket">
        <label htmlFor="number">Phone Number</label>
        <input type="text" id="number" name="number" placeholder="Phone Number" onChange={handleChange} required />
      </div>

      <div className="bracket">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} required />
      </div>

      {userType === "outside" ? (
        <>
          <div className="bracket">
            <label htmlFor="nationalID">National ID</label>
            <input type="text" id="nationalID" name="nationalID" placeholder="National ID" onChange={handleChange} required />
          </div>

          <div className="bracket file-upload">
            <label htmlFor="idPicture">ID Picture</label>
            <input type="file" id="idPicture" onChange={handleFileChange} required />
          </div>
        </>
      ) : (
        <div className="bracket">
          <label htmlFor="idNumber">University ID Number</label>
          <input type="text" id="idNumber" name="idNumber" placeholder="University ID Number" onChange={handleChange} required />
        </div>
      )}
    </form>
      <button type="submit" className="submit-button">Next: Select Seat</button>
    </div>
  );
}

export default PaymentForm;
