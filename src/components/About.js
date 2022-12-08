import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setMyText] = useState("Enable White Mode");
  const togglestyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setMyText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border : '1px solid white',
      });
      setMyText("Enable White Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2" >
        About Us
      </h2>
      <div className="accordion" id="accordionExample my-2" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Swayam
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Swayam is my first name.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item my-2" >
          <h2 className="accordion-header" id="headingTwo" >
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Rajkumar
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Rajkumar is my middle name </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item my-2" >
          <h2 className="accordion-header" id="headingThree" >
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Karle
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Karle is my sir name. </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3" >
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={myStyle}
          onClick={togglestyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
