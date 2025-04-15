import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Loading.css";

class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Hero">
        <div className="HeroGroup" id="HeroGroupID">
          <p>Please wait.......</p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Loading));
