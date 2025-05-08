import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./HeaderSection";
import SwitchPics from "./SwitchPics";

class IndexPage extends React.PureComponent {
  routeToCompanies = () => {
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="Hero" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="HeroGroup" style={{ height: "100vh" }}>
            <h1>Hi!</h1>
            <p style={{ animationDelay: "1s" }}>
              Please tap or click on the navbar to see more
            </p>
            <p style={{ animationDelay: "1.3s" }}>
              Tap or click on the icon below to change the website's background
              image
            </p>
            <button
              type="button"
              className="ContactMeButton"
              onClick={this.routeToCompanies}
              style={{ animationDelay: "1.5s" }}
            >
              Contact
            </button>
            <SwitchPics />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(IndexPage));
