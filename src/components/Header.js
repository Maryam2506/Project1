import React from "react";

// Libary used for font 
import { Wave } from "react-animated-text";

const Header = () => {
  return (
    <div className="header">
      <h1>Expense tracker </h1>
      <h2>
        {" "}
        <Wave text="By Maryam Tufail (CNC BATCH 4)" />
       <h3> Thanks to All PanaCloud Team</h3>
      </h2>
    </div>
  );
};

export default Header;
