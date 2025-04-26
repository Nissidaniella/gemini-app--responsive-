import React from 'react'
import "../index.css";
import "../Responsive.css";
import image from "../images/target.jpg";

export default function Target() {
  return (
    <>
<div className="target-container">
        <div className="target-title">
          <h1>
            {" "}
            <span className="big">Target </span> Audience
          </h1>

          <div className="target-flex-img">
            <h1 className="target-img-cont"></h1>
            <img src={image} alt="" className=" " />
          </div>
        </div>

        <div className="target-text">
          <p>
          • School-aged children and youth <br></br> <br></br>
          • Individuals who are already engaged in activities that align with our organization's mission and values, and who could benefit from additional support
          <br></br> <br></br>
          • Individuals who can demonstrate their potential through evidence of their work or achievements
          </p>
        </div>
      </div>
    </>
  )
}