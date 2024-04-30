import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "./Card";
import Section from "./Section";
import Header from "./HeaderSection";
import Footer from "./Footer";
import studioReact from "../images/logo-react.png";
import amexLogo from "../images/amex.png";
import appleLogo from "../images/applecomputers.jpg";
import dhLogo from "../images/dh.jpg";
import vertexLogo from "../images/vertex.jpeg";
import ccLogo from "../images/cardconnect.jpeg";
import comcastLogo from "../images/comcast.jpeg";
import hexagonLogo from "../images/hexagonusfederal.jpeg";
import travelersLogo from "../images/travelers.png";
import paramountLogo from "../images/paramount.png";

function getAPIMOCKDATA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Sakura", lastName: "Hatori", age: "32" },
        { name: "Haturo", lastName: "San", age: "33" },
      ]);
    }, 1000);
  });
}

function getDataThunk() {
  return async function (dispatch) {
    dispatch({ type: "GET_DATA" });

    try {
      const data = await getAPIMOCKDATA();

      return dispatch({ type: "GET_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_DATA_ERROR" });
      throw new Error(error);
    }
  };
}

class IndexPage extends React.PureComponent {
  componentDidMount() {
    this.props.getDataIndexPage();
  }
  render() {
    console.log(this.props.data, "data array example");
    console.log(
      this.props,
      "important tools to navigate through web application"
    );
    return (
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              src="https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/workvideo.mp4"
            />

            <h1>
              Welcome <br />
              to my website
            </h1>
            <p>Please scroll down to see the companies I have worked for</p>
          </div>
        </div>
        <section id="companies">
          <div className="Cards">
            <h2>Companies</h2>
            <div className="CardGroup">
              <Card image={paramountLogo} />
              <Card image={travelersLogo} />
              <Card image={amexLogo} />
              <Card image={appleLogo} />
              <Card image={dhLogo} />
              <Card image={vertexLogo} />
              <Card image={ccLogo} />
              <Card image={comcastLogo} />
              <Card image={hexagonLogo} />
            </div>
          </div>
        </section>
        <section id="about">
          <Section
            logo={studioReact}
            title="About"
            text="I'm a Full Stack Software Developer that specializes in HTML5, CSS3, SASS, JavaScript, JSX, React JS, Redux, Node JS, Express JS, AWS, MySQL, PostgreSQL, and Mongo DB."
          />
        </section>
        <section id="linked-in">
          <Footer />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.paymentReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return { getDataIndexPage: bindActionCreators(getDataThunk, dispatch) };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IndexPage)
);
