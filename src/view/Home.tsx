import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { increment, decrement } from '../store/reducer/counter/actions';
import { Link } from "react-router-dom";

interface HomeState {
  counter: any;
  dispatchIncrement: any,
  dispatchDecrement: any,
}

function Home({ counter, dispatchIncrement, dispatchDecrement }: HomeState) {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Hello World!</h1>
        <input
          type="button"
          value="INCREMENT"
          className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300"
          onClick={dispatchIncrement}
        />
        <input
          type="button"
          value="DECREMENT"
          onClick={dispatchDecrement}
        />
        <p>{counter}</p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchIncrement: increment,
      dispatchDecrement: decrement
    },
    dispatch
  );

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Home) as any;
