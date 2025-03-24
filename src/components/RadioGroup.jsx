import React from "react";

function RadioGroup({ userType, setUserType }) {
  return (
    <div className="mt-4">
      <label>
        <input
          type="radio"
          value="outside"
          checked={userType === "outside"}
          onChange={() => setUserType("outside")}
        />
        Outside University
      </label>
      <label className="ml-4">
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
