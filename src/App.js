import React from "react";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Layout from "./features/layout/layout";
import Landing from "./features/landing/landing";
import SignUp from "./features/session/signUp/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./features/map/map";

function App() {
  return (
    <div className="App">
      {/* <Map /> */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/map" component={Map} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
