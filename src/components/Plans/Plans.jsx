import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import InjectedCheckoutForm from "../ultis/payment";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    console.log(process.env.STRIPEKEY);
    stripePromise = loadStripe(process.env.STRIPEKEY);
  }
  return stripePromise;
};
const Plans = () => {
  const item = {
    price: "price_1LNUxIFsfyYLdIast1lNsY7W",
    quantity: 1,
  };
  const checkoutOptions = {
    lineItems: [item],
    mode: "subscription",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };
  const redirectCheckout = async () => {
    console.log("redirectToCheckOut");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("stripe error", error);
  };
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <span>See more details -> </span>
            <button className="btn" onClick={redirectCheckout}>
              Join now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
