import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ciudad de Guatemala, 01018</p>
              <p>Guatemala</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +502 4960-4542
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              gzepedah2@miumg.edu.gt
            </h4>
            <div className="social"> </div>
          </div>
        </div>

        <div className="right">
          <h4>About this page</h4>
          <p>
            This is portfolio web page asigned as a proyect in the University.
          </p>

          <div className="social">
            <a href="https://www.facebook.com/">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
            />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/GustavoAZepeda?tab=repositories">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
