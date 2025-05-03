import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class GoBackButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goBackToRoot = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <button
        type="button"
        className="BackButtonQandA"
        onClick={this.goBackToRoot}
      >
        <i
          className="fa fa-arrow-left fa-1x"
          style={{ marginRight: "12px" }}
        ></i>
        Back{" "}
      </button>
    );
  }
}

export default withRouter(connect(null, null)(GoBackButton));
