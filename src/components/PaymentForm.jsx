import React from "react";
import "../App.css";

function PaymentForm({ userType, formData, handleChange, handleFileChange, handleSubmit }) {
  return (
    <div className="MainFormContainer">
      <form onSubmit={handleSubmit} className="nice-form-group">
        <div className="form-group">
          <div className="title">
            <label htmlFor="name">Name</label>
          </div>
          <div className="bracket">
            <input type="text" id="name" name="name"  onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <div className="title">
            <label htmlFor="number">Phone Number</label>
          </div>
          <div className="bracket">
            <input type="text" id="number" name="number"  onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <div className="title">
            <label htmlFor="email">Email</label>
          </div>
          <div className="bracket">
            <input type="email" id="email" name="email"  onChange={handleChange} required />
          </div>
        </div>

        {userType === "outside" ? (
          <>
            <div className="form-group">
              <div className="title">
                <label htmlFor="nationalID">National ID</label>
              </div>
              <div className="bracket">
                <input type="text" id="nationalID" name="nationalID"  onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <div className="title">
                <label htmlFor="idPicture">ID Picture</label>
              </div>
              <div className="bracket">
                <input type="file" id="idPicture" onChange={handleFileChange} required />
              </div>
            </div>
          </>
        ) : (
          <div className="form-group">
            <div className="title">
              <label htmlFor="idNumber">University ID Number</label>
            </div>
            <div className="bracket">
              <input type="text" id="idNumber" name="idNumber"  onChange={handleChange} required />
            </div>
          </div>
        )}
      </form>
      <button type="submit" className="submit-button">Next: Select Seat</button>
    </div>
  );
}

export default PaymentForm;
