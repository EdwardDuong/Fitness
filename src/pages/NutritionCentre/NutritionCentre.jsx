import React from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import "./nutritionCentre.css";
import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { MdAdd, MdLogout } from "react-icons/md";
import Avata from "../../assets/nutri_img/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../components/context/StateProvider";
import { actionType } from "../../components/context/reducer";
const NutritionCentre = () => {
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
    }
  };
  return (
    <div className="nutritionCentre" id="nutri">
      <div className="nutri-container">
        <div className="left-nutri">
          <Header />
        </div>
        <div className="right-nutri">
          <motion.div className="shopping-cart" whileTap={{ scale: 0.8 }}>
            <BsCart4 />
            <div className="cart-count">
              <p>2</p>
            </div>
          </motion.div>
          <div className="user">
            <motion.img
              src={user ? user.photoURL : Avata}
              alt=""
              className="avata"
              whileTap={{ scale: "0.6" }}
              onClick={login}
            />
            <div className="log-out">
              <p>
                New Item <MdAdd />
              </p>
              <p>
                Log out <MdLogout />
              </p>
            </div>
          </div>
        </div>
        <List />
      </div>
    </div>
  );
};

export default NutritionCentre;
