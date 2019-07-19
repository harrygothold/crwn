import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
