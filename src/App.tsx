import React from 'react';
import { Switch, Route } from 'react-router';


import Home from "./view/Home";
import About from "./view/About";
import LandingPage from "./view/Landingpage";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/homepage" component={LandingPage} />
        </Switch>
      </div>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
