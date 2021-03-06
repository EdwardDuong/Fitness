import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import Linkedin from "../../assets/linkedin.png";
import Git from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
const Footer = () => {
  return (
    <div className="footer-cointainer">
      <hr />
      <div className="footer">
        <div className="contacts">
          <img src={Linkedin} alt="" />
          <img src={Git} alt="" />
          <img src={Insta} alt="" />
        </div>
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="blur footer-blur"></div>
    </div>
  );
};

export default Footer;
