import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Goal = () => {
  return (
    <div className="Poppins-font">
      <div className="goal container">

        <div className="goal-heading d-flex align-items-center">
          <div className="goal-line"></div>
          <h3 className="heading-3">
            Today's <span>Motivation</span>
          </h3>
        </div>

        <div className="goal-cards">
          <div class="row">
            <div class="col">
              <div className="goal-card">
               <img src={require("../Asset/m1.png")} width="80" height="80" alt="m1"/> 
               <div className="goal-card__text">When fell like quitting Rember <span> Why You Started</span></div>
              </div>
            </div>
            <div class="col">
                  <div className="goal-card">
               <img src={require("../Asset/m3.png")} width="80" height="80" alt="m1"/> 
               <div className="goal-card__text">the harder the workout <br/><span>the grater the feeling of accomplishent</span> </div>
              </div>
            </div>
            <div class="col">
                  <div className="goal-card">
               <img src={require("../Asset/m4.png")} width="80" height="80" alt="m1"/> 
               <div className="goal-card__text">Endure the <span>pain</span>&nbsp;enjoy the <span>gain</span></div>
              </div>
            </div>

            <div class="col">
                  <div className="goal-card">
               <img src={require("../Asset/m2.png")} width="80" height="80" alt="m1"/> 
               <div className="goal-card__text">A one-hour workout is<span>&nbsp;4%</span>  of your day.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
