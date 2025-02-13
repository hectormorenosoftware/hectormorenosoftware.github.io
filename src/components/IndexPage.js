import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card";
import Section from "./Section";
import Header from "./HeaderSection";
import Footer from "./Footer";
import { getDataThunk } from "../redux/actions/exampleActions";
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
        <div className="Hero" id="HeroIDTwo">
          <div className="HeroGroup" id="HeroGroupID">
            <p>Loading Hector Moreno's website please wait ...</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            {window.innerWidth < 1000 ? null : (
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                src="https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/dronerecording.mp4"
              />
            )}

            <h1>
              Welcome <br />
              to Hector Moreno's portfolio
            </h1>
            <p>Please scroll down to see the companies he has contracted for</p>
          </div>
        </div>
        <section id="companies">
          <div className="Cards">
            <h2>Companies</h2>
            <p style={{ textAlign: "center" }}>Click on images to see more</p>
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
        </section>
        <section id="about">
          <Section
            title="About"
            text="Hector Moreno is a Full-Stack Software Engineer with over 6 years of experience that specializes in HTML5, CSS3, SCSS, JavaScript, JSX, React JS, React Native, Redux, Node JS, Express JS, AWS, MySQL, PostgreSQL, and Mongo DB.
            He is a Computer Science graduate from the University of Texas at Arlington and the Full-Stack Software Engineer that architected, developed, and designed Apple TV+ and Paramount+."
          />
        </section>
        <section id="contact">
          <Footer>
            <p>&copy; Hector Moreno's Portfolio </p>
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
