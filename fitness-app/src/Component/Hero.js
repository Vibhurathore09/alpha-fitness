import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "../App.css";

const Hero = () => {
  return (
    <div>
      <div className="hero  d-flex justify-content-evenly align-items-center">

        <div className="hero-tagline">
          <h1 className="heading-1 ">
            Come & Make Your Dream Body With
            <span className="heading-1 hero-span "> Alpha Fitness</span>
          </h1>

          <div className="hero-buttons mt-5">
            <button type="button" className="btn btn-custom">
              Exercise
            </button>
            
            <div className="play-button Poppins-font">
            <div className="circle"> 
              <span className="play"></span>
            </div>
            <p>Watch Video</p>
            </div>
           
          </div>

          <p className="hero-tagline__para mt-4">
            Already a member of our community ?<span><a href="/" className="hero-link">&nbsp;sign in</a></span>
          </p>
        </div>

        <div className="hero-image">
          <img
            src={require("../Asset/hero-2.png")}
            width="680"
            height="680"
            alt="hero"
          />
          {/* <div className="heart Poppins-font">
            <img src={require("../Asset/heart-icon.png")} width="35" height="35" alt="heart"/> 
            <div className="heart-desc"><p>Heart Rate<br/><span>9234</span> bpm</p></div>
          </div>

          <div className="spo2 Poppins-font">
            <img src={require("../Asset/SPO2.png")} width="50" height="50" alt="heart"/> 
            <div className="heart-desc spo2-desc"><p>&nbsp;&nbsp;SpO2<span>&nbsp;99%</span></p></div>
          </div> */}

        </div>

        <div className="achievement d-flex flex-column Roboto-font">
          <div className="p-2">
            <h2 className="heading-2">120k</h2>
            <p className="desc Poppins-font">Happy clients </p>
          </div>

          <div className="p-2">
            <h2 className="heading-2 border-up">8+</h2>
            <p className="desc Poppins-font">Trainers</p>
          </div>

          <div className="p-2">
            <h2 className="heading-2 border-up ">350+</h2>
            <p className="desc Poppins-font">Different Exercise</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
