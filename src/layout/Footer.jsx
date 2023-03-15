import React from "react";
import "../styles/Footer.css";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
<script
  src="https://kit.fontawesome.com/1e68919d5d.js"
  crossorigin="anonymous"
></script>;
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="contact">
            <a
              href="https://www.facebook.com/robert.proxy"
              target="_target"
              style={{ color: "black", fontSize: "50px" }}
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/proxyrobert/"
              target="_target"
              style={{ color: "black", fontSize: "50px" }}
            >
              <FaInstagramSquare />
            </a>
            <div className="facebook"></div>
            <div className="instagram"></div>
          </div>
          <div className="email">Email: imr_robert@yahoo.com </div>
          <p>
            &copy;{new Date().getFullYear()} Proxy Photography | All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
