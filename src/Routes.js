import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import QandA from "./components/QandA";
import Companies from "./components/Companies";
import About from "./components/About";
import Contact from "./components/Contact";

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/QandA" render={() => <QandA />} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
