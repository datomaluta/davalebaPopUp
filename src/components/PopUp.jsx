import React, { useState } from "react";
import "./PopUp.css";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggle} className="openButton">
        Click Me
      </button>

      {isOpen && (
        <div className="main">
          <div onClick={toggle} className="around"></div>
          <div className="popUp">
            <h2>This is PopUp</h2>
            <p>
              hello, To close, press the close button
            </p>
            <button className="closeButton" onClick={toggle}>
              Close
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}