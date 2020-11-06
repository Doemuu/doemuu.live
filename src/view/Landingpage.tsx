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
        <span className="line-1 line absolute"></span>
        <span className="line-2 line absolute"></span>
        <span className="line-3 line absolute"></span>
      </div>
      <div className="motto-container absolute ">
        <div className="motto-1 motto">
          <span>Loyalty</span>
        </div>
        <div className="motto-2 motto">
          <span>Courage</span>
        </div>
        <div className="motto-3 motto">
          <span>Endurance</span>
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
