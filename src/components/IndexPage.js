import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./HeaderSection";

class IndexPage extends React.PureComponent {
  routeToCompanies = () => {
    this.props.history.push("/companies");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="Hero" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="HeroGroup" style={{ height: "100vh" }}>
            <h1>Welcome!</h1>
            <p style={{ animationDelay: "1s" }}>
              Please tap or click on the navbar to see more
            </p>
            <button
              type="button"
              className="ContactMeButton"
              onClick={this.routeToCompanies}
              style={{ animationDelay: "1.3s" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(IndexPage));
