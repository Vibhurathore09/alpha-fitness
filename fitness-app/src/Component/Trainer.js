import React from "react";

const Trainer = () => {

  const handleClick=()=>{
    console.log("FUCKING<<<");
    const trailer= document.querySelector('.trailer');
    const video=document.querySelector('video')
    trailer.classList.toggle('active')
    video.currentTime=0
    video.pause();
  }


  return (
    <div className="trainer">
      <img className="trainer-bg" src={require("../Asset/home-5.jpg")} />
      <div class="trainer-text">
          <span class="Roboto-Font" onClick={handleClick}>WATCH VIDEO</span>
          <img src={require("../Asset/right-up.png")}/>
      </div>
      {/* <div className="trainer-btn btn">Click</div> */}

      
    <div class="trailer">
        <video src={require("../Asset/workout.mp4")} controls="true" autoPlay></video>
        <img src={require("../Asset/close.png")} onClick={handleClick}/>
    </div>

    </div>
  );
};

export default Trainer;


