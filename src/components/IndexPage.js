import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "./Loading";
import Header from "./HeaderSection";
import { getDataThunk } from "../redux/actions/exampleActions";

class IndexPage extends React.PureComponent {
  componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      return this.props.getDataIndexPage();
    }

    return null;
  }

  render() {
    //I used <section> tags because <div> and <section> are both block elements
    //I just wanted to see if they would behave the same way since both are
    //block elements, but they are named different.

    const { loading } = this.props;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div>
        <Header />
        <div className="Hero" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="HeroGroup">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              src="https://websitebuckethectormorenogomez.s3.us-east-2.amazonaws.com/dronerecording.mp4"
            />

            <h1>Welcome!</h1>
            <p style={{ animationDelay: "4s" }}>
              Please click on the navbar to see more
            </p>
          </div>
        </div>
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
