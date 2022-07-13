import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCouter from "number-counter";
import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { MdAdd, MdLogout } from "react-icons/md";
import Avata from "../../assets/nutri_img/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../components/context/StateProvider";
import { actionType } from "../../components/context/reducer";
import { useState } from "react";
const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: "spring", duration: 3 };

  const [isMenu, setMenu] = useState(false);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      dispatch({ type: actionType.SET_USER, user: providerData[0] });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!isMenu);
    }
  };
  const logout = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({ type: actionType.SET_USER, user: null });
  };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the script advertisement */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "9px" }}
            transition={transition}
          ></motion.div>
          <span>the best finess club in the town</span>
        </div>

        {/*the hero body text*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCouter end={140} start={100} delay="3" preFix="+" />
            </span>
            <span>experts coach</span>
          </div>
          <div>
            <span>
              <NumberCouter end={198} start={158} delay="3" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCouter end={50} start={30} delay="3" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right side of the hero */}
      <div className="right-h">
        {/* heart-rate  */}
        <div className="user-container">
          {user && (
            <motion.div className="shopping-cart" whileTap={{ scale: 0.8 }}>
              <BsCart4 />
              <div className="cart-count">
                <p>2</p>
              </div>
            </motion.div>
          )}
          <div className="user">
            <motion.img
              src={user ? user.photoURL : Avata}
              alt=""
              className="avata"
              whileTap={{ scale: "0.6" }}
              onClick={login}
            />
            {!user && <p>Login</p>}
            {isMenu && (
              <motion.div
                className="log-out"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                <p>
                  New Item <MdAdd />
                </p>
                <p onClick={logout}>
                  Log out <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />
        {/* calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
