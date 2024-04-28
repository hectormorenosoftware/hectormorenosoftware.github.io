import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import Contact from "./components/Contact";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <IndexPage />
      </Switch>
    );
  }
}

export default withRouter(App);
