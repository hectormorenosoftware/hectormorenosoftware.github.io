import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TimeSquareOne from "../images/timessquaretwo.png";
import TimeSquareTwo from "../images/timesquarethree.png";
import TimeSquareThree from "../images/timesquareten.png";
import TimeSquareFour from "../images/timesquarefour.png";
import TimeSquareFive from "../images/timesquarefive.png";
import TimeSquareSix from "../images/timesquaresix.png";
import TimeSquareSeven from "../images/timesquareseven.png";
import TimeSquareEight from "../images/timesquareeight.png";
import TimeSquareTen from "../images/nyctimesquare.jpg";
import TimeSquareEleven from "../images/timesquareeleven.png";
import TimeSquareTwelve from "../images/timesquaretwelve.png";

class SwitchPics extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nameOfBackgroundImage: "",
    };
  }

  onCameraIconClick = () => {
    const { nameOfBackgroundImage } = this.state;
    const heroDiv = document.getElementsByClassName("Hero")[0].style;

    if (nameOfBackgroundImage === "") {
      heroDiv.background = `url(${TimeSquareOne})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareOne",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareOne") {
      heroDiv.background = `url(${TimeSquareTwo})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareTwo",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareTwo") {
      heroDiv.background = `url(${TimeSquareThree})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareThree",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareThree") {
      heroDiv.background = `url(${TimeSquareFour})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareFour",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareFour") {
      heroDiv.background = `url(${TimeSquareFive})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareFive",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareFive") {
      heroDiv.background = `url(${TimeSquareSix})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareSix",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareSix") {
      heroDiv.background = `url(${TimeSquareSeven})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareSeven",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareSeven") {
      heroDiv.background = `url(${TimeSquareEight})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareEight",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareEight") {
      heroDiv.background = `url(${TimeSquareTen})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareNine",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareNine") {
      heroDiv.background = `url(${TimeSquareEleven})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareTen",
      });
    }

    if (nameOfBackgroundImage === "TimeSquareTen") {
      heroDiv.background = `url(${TimeSquareTwelve})`;
      heroDiv.backgroundSize = "cover";
      heroDiv.backgroundPosition = "center";

      return this.setState({
        nameOfBackgroundImage: "TimeSquareOne",
      });
    }
  };

  render() {
    return (
      <i
        className="fa fa-exchange fa-2x"
        onClick={this.onCameraIconClick}
        style={{
          cursor: "pointer",
          color: "white",
          display: "block",
          padding: "20px",
          animationDelay: "1.7s",
        }}
      ></i>
    );
  }
}

export default withRouter(connect(null, null)(SwitchPics));
