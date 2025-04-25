import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeBrightnessForUI } from "../redux/actions/universalActions";
import BrightnessImage from "../images/sun.png";

class ChangeBrightness extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { brightness } = this.props;
    if (brightness) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    if (brightness === false) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  changeBrightnessInClass = () => {
    const { changeBright } = this.props;

    changeBright();
  };
  render() {
    return (
      <img
        className="BrightnessImageStyle"
        src={BrightnessImage}
        onClick={this.changeBrightnessInClass}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    brightness: state.universalReducer.brightness,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeBright: bindActionCreators(changeBrightnessForUI, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChangeBrightness)
);
