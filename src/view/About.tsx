import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducer/counter/actions";
import { Link } from "react-router-dom";

interface AboutState {
  counter: any;
  dispatchIncrement: any;
  dispatchDecrement: any;
}

function About({ counter, }: AboutState) {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Hello Boi!</h1>
        <p>Counter: {counter}</p>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(About) as any;
