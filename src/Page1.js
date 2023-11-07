import React from "react";
import "./App.css";

const Page1 = () => {
  return (
    <div className="master">
      <div className="header-1">Petrophysics Calculator</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">Shale Volume</button>
        <button className="option-btn">Porosity</button>
        <button className="option-btn">Permeability</button>
        <button className="option-btn">Resistivity</button>
        <button className="option-btn">Water Saturation</button>
        <div className="next">Next</div>
        <button className="next-btn">--</button>
      </div>
      <footer className="footer-1">
        <button className="exit-btn">Exit</button>
      </footer>
    </div>
  );
};

export default Page1;
