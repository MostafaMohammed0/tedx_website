import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketsPage from "./pages/TicketsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
