import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../vanilla-tilt"

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  // const [count,setCount]=useState(1)
  return (
    <div className="container scroll">
      {data.map((item, count) => (
        <div
          className="excard"
          onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
          }}
        >
          <div className="excard__content">
            <h2>0{count}</h2>
            {/* <img src={require("../Asset/icon/gym2.png")} height={62}/> */}
            <h3>{item}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
