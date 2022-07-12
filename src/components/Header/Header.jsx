import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import Bar from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const mobible = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" onClick={() => navigate("/")} />
      {menuOpen === false && mobible === true ? (
        <div style={{ background: "var(--appColor)", padding: "0.3rem" }}>
          <img
            src={Bar}
            alt=""
            style={{ width: "1.5rem", height: "1rem" }}
            onClick={() => setmenuOpen(!menuOpen)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              onClick={() => navigate("/") && setmenuOpen(false)}
              smooth={true}
              span="true"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => navigate("/") && setmenuOpen(false)}
              smooth={true}
              to="programs"
              span="true"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => navigate("/") && setmenuOpen(false)}
              smooth={true}
              to="reasons"
              span="true"
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => navigate("/") && setmenuOpen(false)}
              to="plans"
              smooth={true}
              span="true"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => navigate("/") && setmenuOpen(false)}
              to="testimonials"
              span="true"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li onClick={() => navigate("/nutri")}>Nutrition centre</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
