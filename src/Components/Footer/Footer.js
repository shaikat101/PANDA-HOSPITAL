import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>PandaCare_Hospital</h1>
               
                <p className="mt-4 ">
                  <small>
                    *We are committed to keeping you healthy and strong. We are always by your side first of all.
                  </small>
                </p>

                <p className="mt-5">
                  <small>PandaCare_Hospital © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up Here</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  
                  <div>
                    <h5>+88010101010101</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                      
                      <br /> Dhanmondi, Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;