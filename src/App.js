import React from "react";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Layout from "./features/layout/layout";
import Landing from "./features/landing/landing";
import SignUp from "./features/session/signUp/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropertyDetail from "./features/propertyDetail/property";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/property/:id" component={PropertyDetail} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
