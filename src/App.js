import React from "react";
import "./App.css";
import Layout from "./features/layout/layout";
import Landing from "./features/landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
