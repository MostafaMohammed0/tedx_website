import React from "react";
import "../App.css";

function RadioGroup({ userType, setUserType }) {
  return (
    <div className="radio-group">
      <label className={`radio-option ${userType === "outside" ? "selected" : ""}`}>
        <input
          type="radio"
          value="outside"
          checked={userType === "outside"}
          onChange={() => setUserType("outside")}
        />
        Outside University
      </label>
      <label className={`radio-option ${userType === "inside" ? "selected" : ""}`}>
        <input
          type="radio"
          value="inside"
          checked={userType === "inside"}
          onChange={() => setUserType("inside")}
        />
        Inside University
      </label>
    </div>
  );
}

export default RadioGroup;
