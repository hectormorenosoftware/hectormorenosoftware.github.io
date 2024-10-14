import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card";
import Section from "./Section";
import Header from "./HeaderSection";
import Footer from "./Footer";
import { getDataThunk } from "../redux/actions/exampleActions";
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

class IndexPage extends React.PureComponent {
  componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      return this.props.getDataIndexPage();
    }

    return null;
  }

  render() {
    const { loading } = this.props;

    if (loading === true) {
      return (
        <div className="Hero" style={{ height: "100vh", overflow: "hidden" }}>
          <div
            className="HeroGroup"
            style={{ height: "78vh", background: "none" }}
          >
            <p>Loading please wait ...</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
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
              <Card image={paramountLogo} url={"https://paramountplus.com"} />
              <Card image={travelersLogo} url={"https://travelers.com"} />
              <Card image={amexLogo} url={"https://americanexpress.com"} />
              <Card image={appleLogo} url={"https://tv.apple.com/us"} />
              <Card image={dhLogo} url={"https://digitalharmonic.com"} />
              <Card image={vertexLogo} url={"https://vertexinc.com"} />
              <Card image={ccLogo} url={"https://cardconnect.com"} />
              <Card image={comcastLogo} url={"https://corporate.comcast.com"} />
              <Card image={hexagonLogo} url={"https://hexagon.com"} />
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
        <section id="contact">
          <Footer>
            <p>&copy; Hector Moreno Gomez Portfolio </p>
          </Footer>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.exampleReducer.data,
    loading: state.exampleReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return { getDataIndexPage: bindActionCreators(getDataThunk, dispatch) };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IndexPage)
);
