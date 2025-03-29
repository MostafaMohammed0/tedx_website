import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TEDx. All rights reserved.</p>
    </footer>
  );
}

export default Footer;