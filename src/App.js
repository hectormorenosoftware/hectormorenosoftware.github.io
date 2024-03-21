import React from "react";
import { Switch, withRouter } from "react-router-dom";

import IndexPage from "./components/IndexPage";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <IndexPage />
      </Switch>
    );
  }
}

export default withRouter(App);
