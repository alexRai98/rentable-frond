import React from "react";
import "./App.css";
import Layout from "./features/layout/layout";
import Landing from "./features/landing/landing";
import PropertiesList from "./features/properties/propertiesList";
import CreatePropertyForm from "./features/properties/createPropertyForm";
import SignUp from "./features/session/signUp/layout";
import { UploadImages } from "./features/properties/uploadImages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/properties" component={PropertiesList} />
            <Route
              exact
              path="/properties/create"
              component={CreatePropertyForm}
            />
            <Route exact path="/upload" component={UploadImages} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
