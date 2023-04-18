import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <section class="footer-section">
        <div class="container">
          <div class="row footer-main">
            <div class="col-lg-4">
              <div class="fs-about">
                <div class="fa-logo">
                  <a href="#">
                    <img src={require("../Asset/logo2.png")} alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua
                  endisse ultrices gravida lorem.
                </p>
                <div class="fa-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa  fa-envelope-o"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="fs-widget">
                <h4>Tips &amp; Guides</h4>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                  </ul>
                </div>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row copyright">
            <div class="col-lg-12 text-center">
              <div class="copyright-text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2023
                  All rights reserved | This website is made by Vaibhav | Mansi
                  | Tanish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
