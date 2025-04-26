import React from "react";
import "../index.css";
import image from "../images/who.jpg";
import "../Responsive.css";

export default function who() {
  return (
    <>
      <div className="who-container">
        <div className="who-title">
          <h1>
            {" "}
            <span className="big">Who </span> are we?
          </h1>

          <div className="flex-img">
            <div className="img-cont"></div>
            <img src={image} alt="" className=" " />
          </div>
        </div>

        <div className="who-text">
          <p>
            We are an 
            <span className="small"> international </span> non-profit organization dedicated to driving
            positive change in education, health, and empowerment. We believe
            that change can start with one person, and through collaborative
            effort, it can transcend borders and barriers to create a better
            world for all. Our mission is achieved by partnering with
            like-minded organizations and individuals who share our passion for
            meaningful impact. By working together, we can leverage our
            collective knowledge, resources, and expertise to make a greater
            difference and foster sustainable change.
          </p>
        </div>
      </div>
    </>
  );
}
