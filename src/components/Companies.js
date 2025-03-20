import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import amexLogo from "../images/amex.png";
import appleLogo from "../images/applecomputers.jpg";
import dhLogo from "../images/dh.jpg";
import vertexLogo from "../images/vertex.jpeg";
import ccLogo from "../images/cardconnect.jpeg";
import comcastLogo from "../images/comcast.jpeg";
import hexagonLogo from "../images/hexagonusfederal.jpeg";
import travelersLogo from "../images/travelers.png";
import paramountLogo from "../images/paramount.png";

class Companies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pushToRoot = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Cards">
        <div className="FlexColumn">
          <button
            type="button"
            className="BackButtonQandA"
            onClick={this.pushToRoot}
          >
            Go Back
          </button>
          <h2>Companies I have contracted for</h2>
          <p style={{ textAlign: "center" }}>
            Click or tap on images to see more
          </p>
        </div>
        <div className="CardGroup">
          <Card
            image={paramountLogo}
            url={"https://paramountplus.com"}
            alt={"paramount-image"}
          />
          <Card
            image={travelersLogo}
            url={"https://travelers.com"}
            alt={"travelers-image"}
          />
          <Card
            image={amexLogo}
            url={"https://americanexpress.com"}
            alt={"amex-image"}
          />
          <Card
            image={appleLogo}
            url={"https://tv.apple.com/us"}
            alt={"apple-image"}
          />
          <Card
            image={dhLogo}
            url={"https://digitalharmonic.com"}
            alt={"dh-image"}
          />
          <Card
            image={vertexLogo}
            url={"https://vertexinc.com"}
            alt={"vertex-image"}
          />
          <Card
            image={ccLogo}
            url={"https://cardconnect.com"}
            alt={"cardconnect-image"}
          />
          <Card
            image={comcastLogo}
            url={"https://corporate.comcast.com"}
            alt={"comcast-image"}
          />
          <Card
            image={hexagonLogo}
            url={"https://hexagon.com"}
            alt={"hexagon-image"}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Companies));
