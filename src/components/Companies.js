import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

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
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/paramount.png"
            }
            url={"https://paramountplus.com"}
            alt={"paramount-image"}
            companyName={"Paramount+"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/travelers.png"
            }
            url={"https://travelers.com"}
            alt={"travelers-image"}
            companyName={"Travelers Insurance"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/amex.png"
            }
            url={"https://americanexpress.com"}
            alt={"amex-image"}
            companyName={"American Express"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/applecomputers.jpg"
            }
            url={"https://tv.apple.com/us"}
            alt={"apple-image"}
            companyName={"Apple Inc."}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/dh.jpg"
            }
            url={"https://digitalharmonic.com"}
            alt={"dh-image"}
            companyName={"Digital Harmonic"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/vertex.jpeg"
            }
            url={"https://vertexinc.com"}
            alt={"vertex-image"}
            companyName={"Vertex"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/cardconnect.jpeg"
            }
            url={"https://cardconnect.com"}
            alt={"cardconnect-image"}
            companyName={"Card Connect"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/comcast.jpeg"
            }
            url={"https://corporate.comcast.com"}
            alt={"comcast-image"}
            companyName={"Comcast"}
            description={"Click or tap to see more"}
          />
          <Card
            image={
              "https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/hexagonusfederal.jpeg"
            }
            url={"https://hexagon.com"}
            alt={"hexagon-image"}
            companyName={"Hexagon U.S. Federal"}
            description={"Click or tap to see more"}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Companies));
