import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import QandA from "./components/QandA";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/QandA" render={() => <QandA />} />
        <IndexPage />
      </Switch>
    );
  }
}

export default withRouter(App);
