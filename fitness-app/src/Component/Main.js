import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const Main = () => {
  return (
<div>
    <div className='Container'>
          <div className="image-box-container">
              <div className="contents">
                <h1 className='heading-1_about'>About us</h1>
                 <span>
                  <a href = "#Home" className='Links'>Home</a>  {">"}   <a href ="#About" className='Links'>About</a>
                  </span>
            </div>
          </div>

          <div className="Welcome-To-Aplha">
            <div className="img-box">
                <img src={require("../Asset/trainer.jpg")}alt="" srcset="" width={"634px"} />
            </div>
            <div className="contents-2">
                 <h2 className="headings-2">Welcome to Alpha fitness</h2>
                <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat odio sunt quibusdam, quam minus hic officiis, maiores explicabo cum consequatur enim. Aliquid, quaerat ullam? Commodi ab magni soluta ipsa repudiandae, omnis exercitationem ipsum possimus magnam recusandae quasi incidunt, inventore eaque laboriosam consequatur nesciunt dolore?</strong>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere similique dolores qui tempore mollitia atque quisquam quis voluptate fugit, aliquid vitae maiores est cupiditate, enim id rem dolorem! Deserunt esse odit deleniti fugiat quas natus praesentium accusantium reiciendis sequi porro facere fugit fuga corporis ipsam suscipit, eum placeat. Soluta hic expedita modi, magnam magni fugit harum! Ab et sint tempora quaerat? Esse nostrum maxime, dolores, amet ad illo dolor laboriosam blanditiis atque iusto quaerat porro et eos.
                </p>
            </div>
          </div>
          <div className="choose-section">
            <div className="choose-contents">
            <h1 className="heading-1">Why choose us</h1>
             <p className="para p-2">Our fitness experts can help you discover new training techniques</p>
             <div className="icons">
                  <div className="icon-1">
                  
                    <h3 className="heading-3_about_about">
                    How do I become an author?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-2">
                    <h3 className="heading-3_about">
                    Is my license transferable?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-3">
                    <h3 className="heading-3_about">
                    What do you mean by item?
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
                  <div className="icon-4">
                    <h3 className="heading-3_about">
                    Top notch customer support
                    </h3>
                    <p className="para p-2">
                    Event Calendar and Event Calendar Pro full support out of the box.
                    </p>
                  </div>
             </div>
             </div>
          </div>

<div className="Our-Trainer">
    <h1 className="heading-1 he">
       Our Facilities
    </h1>
    <p className="para">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti illum hic ut.
    </p>
    <div className="trainer-imgs">
        {/* <div className="img1">
            <img src={require("../Asset/Body.jpg")} width={"380px"} height={"310px"}/>
            <div className="img1-contents">
            <h5 className="heading-4"><strong>Bodypart</strong></h5>
            <div className="img1-points">
              <ul>
                <li><a href = "" className='Links l'>
                  Chest</a></li>
                <li><a href = "" className='Links l'>
                  Abs</a></li>
                <li><a href = "" className='Links l'>
                  Lower Back</a></li>
                <li>
                <a href = "" className='Links l'>
                  Biceps
                </a></li>
              </ul>
            </div>
            </div>
        </div> */}
        <div className="img2">
            <img src={require("../Asset/Equip.jpg")} width={"380px"} height={"310px"}/>
            <div className="img2-contents">
            <h5 className="heading-4"><strong>Equipment</strong></h5>
            <div className="img2-points">
              <ul>
                <li><a href = "" className='Links l'>
                  Chest</a></li>
                <li><a href = "" className='Links l'>
                  Abs</a></li>
                <li><a href = "" className='Links l'>
                  Lower Back</a></li>
                <li>
                <a href = "" className='Links l'>
                  Biceps
                </a></li>
              </ul>
            </div>
            </div>
        </div>
        <div className="img3">
            <img src={require("../Asset/Body2.jpg")}  width={"380px"} height={"310px"}/>
            <div className="img3-contents">
            <h5 className="heading-4"><strong>Muscle</strong></h5>
            <div className="img3-points">
              <ul>
                <li><a href = "" className='Links l'>
                  Chest</a></li>
                <li><a href = "" className='Links l'>
                  Abs</a></li>
                <li><a href = "" className='Links l'>
                  Lower Back</a></li>
                <li>
                <a href = "" className='Links l'>
                  Biceps
                </a></li>
              </ul>
            </div>
            </div>
        </div>
        <div className="img4">
            <img src={require("../Asset/t4.jpg")}  width={"380px"} height={"310px"}/>
            <div className="img4-contents">
            <h5 className="heading-4"><strong>Target</strong></h5>
            <div className="img4-points">
              <ul>
                <li><a href = "" className='Links l'>
                  Chest</a></li>
                <li><a href = "" className='Links l'>
                  Abs</a></li>
                <li><a href = "" className='Links l'>
                  Lower Back</a></li>
                <li>
                <a href = "" className='Links l'>
                  Biceps
                </a></li>
              </ul>
            </div>
            </div>
        </div>
    </div>
</div>

<div className="Our-Teams">
<h1 className="heading-1 he">
        Meet Our Teams
    </h1>
    <div className="Teams-container">
        <div className="Team-contents">
        <div className="team1">
            <div className="team1-img"></div>
            <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam natus dolorum!</p>
            </div>
        </div>
        <div className="team2">
        <div className="team2-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Doloremque aliquam natus dolorum!</p>
            </div>
        </div>
        <div className="team3">
        <div className="team3-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam natus dolorum!</p>
       </div>
        </div>
        <div className="team4">
        <div className="team4-img"></div>
        <div className="para-box">
            <p className="para par">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Doloremque aliquam natus dolorum!</p>
        </div>
        </div>
    </div>
    </div>
</div>
    </div>
    </div>
  )
}                  

export default Main
