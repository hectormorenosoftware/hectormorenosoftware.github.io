import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ChangeBrightness from "./ChangeBrightness";
import GoBackButton from "./GoBackButton";
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
import expressLogo from "../images/express.jpg";
import walmartLogo from "../images/walmartlogo.png";
import charterLogo from "../images/charterlogo.jpg";

const arrayOfCompanies = [
  {
    image: paramountLogo,
    url: "https://paramountplus.com",
    alt: "paramount-image",
    companyName: "Paramount+",
    description: "Click or tap to see website",
  },
  {
    image: travelersLogo,
    url: "https://travelers.com",
    alt: "travelers-image",
    companyName: "Travelers Insurance",
    description: "Click or tap to see website",
  },
  {
    image: amexLogo,
    url: "https://americanexpress.com",
    alt: "amex-image",
    companyName: "American Express",
    description: "Click or tap to see website",
  },
  {
    image: charterLogo,
    url: "https://www.spectrum.com/",
    alt: "charter-image",
    companyName: "Charter",
    description: "Click or tap to see website",
  },
  {
    image: walmartLogo,
    url: "https://corporate.walmart.com/",
    alt: "walmart-image",
    companyName: "Walmart",
    description: "Click or tap to see website",
  },
  {
    image: appleLogo,
    url: "https://getsupport.apple.com/repair",
    alt: "apple-image",
    companyName: "Apple Inc.",
    description: "Click or tap to see website",
  },
  {
    image: dhLogo,
    url: "https://digitalharmonic.com",
    alt: "dh-image",
    companyName: "Digital Harmonic",
    description: "Click or tap to see website",
  },
  {
    image: vertexLogo,
    url: "https://vertexinc.com",
    alt: "vertex-image",
    companyName: "Vertex",
    description: "Click or tap to see website",
  },
  {
    image: expressLogo,
    url: "https://www.express.com/",
    alt: "express-image",
    companyName: "Express",
    description: "Click or tap to see website",
  },
  {
    image: ccLogo,
    url: "https://cardconnect.com",
    alt: "cardconnect-image",
    companyName: "Card Connect",
    description: "Click or tap to see website",
  },
  {
    image: comcastLogo,
    url: "https://corporate.comcast.com",
    alt: "comcast-image",
    companyName: "Comcast",
    description: "Click or tap to see website",
  },
  {
    image: hexagonLogo,
    url: "https://hexagon.com",
    alt: "hexagon-image",
    companyName: "Hexagon U.S. Federal",
    description: "Click or tap to see website",
  },
];

class Companies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: arrayOfCompanies,
      name: "",
    };
  }

  resetData = () => {
    this.setState({
      data: arrayOfCompanies,
      name: "",
    });
  };

  filterCompanyByName = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    if (
      value === "Paramount" ||
      value === "Paramount+" ||
      value === "paramount"
    ) {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Paramount+";
        }),
        name: value,
      });
    }

    if (
      value === "Travelers" ||
      value === "Travelers Insurance" ||
      value === "travelers"
    ) {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Travelers Insurance";
        }),
        name: value,
      });
    }

    if (
      value === "American Express" ||
      value === "American" ||
      value === "american" ||
      value === "american express"
    ) {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "American Express";
        }),
        name: value,
      });
    }

    if (value === "Charter" || value === "charter") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Charter";
        }),
        name: value,
      });
    }

    if (value === "Walmart" || value === "walmart") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Walmart";
        }),
        name: value,
      });
    }

    if (
      value === "Apple" ||
      value === "Apple Inc" ||
      value === "Apple Inc." ||
      value === "apple" ||
      value === "apple inc" ||
      value === "apple inc."
    ) {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Apple Inc.";
        }),
        name: value,
      });
    }

    if (
      value === "digital" ||
      value === "digital harmonic" ||
      value === "Digital" ||
      value === "Digital Harmonic"
    ) {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Digital Harmonic";
        }),
        name: value,
      });
    }

    if (value === "vertex" || value === "Vertex") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Vertex";
        }),
        name: value,
      });
    }

    if (value === "express" || value === "Express") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Express";
        }),
        name: value,
      });
    }

    if (value === "card" || value === "Card" || value === "Card Connect") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Card Connect";
        }),
        name: value,
      });
    }

    if (value === "comcast" || value === "Comcast") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Comcast";
        }),
        name: value,
      });
    }

    if (value === "hexagon" || value === "Hexagon") {
      return this.setState({
        data: data.filter((v) => {
          return v.companyName === "Hexagon U.S. Federal";
        }),
        name: value,
      });
    }
    return this.setState({
      data: arrayOfCompanies,
      name: value,
    });
  };

  render() {
    const { data, name } = this.state;

    return (
      <div className="Cards">
        <div className="FlexColumn">
          <ChangeBrightness />
          <GoBackButton />
          <h2>Companies I have contracted for</h2>
          <p style={{ textAlign: "center" }}>
            Click or tap on images to see more
          </p>
          <div className="flexBoxInputFieldCompanyPage">
            <input
              className="inputCompanyPage"
              type="text"
              placeholder="Search for a company name"
              value={name}
              onChange={this.filterCompanyByName}
            />
            <button
              className="resetDataButtonCompanyPage"
              type="button"
              onClick={this.resetData}
            >
              Start Over
            </button>
          </div>
        </div>
        <div className="CardGroup">
          {data.map((company, i) => {
            return (
              <Card
                key={i}
                image={company.image}
                url={company.url}
                alt={company.alt}
                companyName={company.companyName}
                description={company.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brightnessValue: state.universalReducer.brightness,
  };
}

export default withRouter(connect(mapStateToProps, null)(Companies));
