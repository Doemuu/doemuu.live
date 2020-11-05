import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducer/counter/actions";
import { Link } from "react-router-dom";
import Loyalty from "../assets/images/Loyalty.svg";
import Courage from "../assets/images/Courage.svg";
import Endurance from "../assets/images/Endurance.svg";

import "../assets/landingpage.css";

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="navigation-burger absolute">
        <span>Hello World</span>
      </div>
      <div className="motto-container absolute ">
        <div className="motto-1 motto">
          <img src={Loyalty} alt="Loyalty"></img>
        </div>
        <div className="motto-2 motto">
          <img src={Courage} alt="Courage"></img>
        </div>
        <div className="motto-3 motto">
          <img src={Endurance} alt="Endurance"></img>
        </div>
        <div className="continuation-container">
          <span>Dominik Berger</span>
          <span className="more">more</span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
