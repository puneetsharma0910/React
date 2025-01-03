import React from "react";
import puneet from "../assets/puneet.jpg.jpg";
import "./Usercard.css";

const Usercard = (props) => {
  return (
    <div className="User-container">
      <p>{props.name}</p>
      <img src={puneet} alt="" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Usercard;
