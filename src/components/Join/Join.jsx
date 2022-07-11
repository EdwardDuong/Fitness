import React from "react";
import "./join.css";
const Join = () => {
  return (
    <div className="join">
      <div className="join-headers">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="mailbox">
        <form className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email"
          />
          <button className="btn">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
