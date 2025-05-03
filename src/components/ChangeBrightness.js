import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeBrightnessForUI } from "../redux/actions/universalActions";
import BrightnessModeImage from "../images/sun.png";
import DarkModeImage from "../images/moon.png";

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
    const { brightness } = this.props;
    return (
      <React.Fragment>
        {brightness ? (
          <img
            className="BrightnessImageStyle"
            src={BrightnessModeImage}
            onClick={this.changeBrightnessInClass}
          />
        ) : (
          <img
            className="BrightnessImageStyle"
            src={DarkModeImage}
            onClick={this.changeBrightnessInClass}
          />
        )}
      </React.Fragment>
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
