import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChangeBrightness from "./ChangeBrightness";

class QandA extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  GoBackEvent = () => {
    this.props.history.push("/");
  };

  render() {
    const { brightnessValue } = this.props;

    return (
      <div className="HeroQAndA">
        <div className="FlexColumn">
          <ChangeBrightness />
          <button
            type="button"
            className="BackButtonQandA"
            onClick={this.GoBackEvent}
          >
            Go Back
          </button>
          <h1
            style={{
              fontWeight: "350",
            }}
          >
            Q and A
          </h1>
          <div
            className="ParagraphIDQandA"
            id={brightnessValue ? "ParagraphIDQABorder" : null}
          >
            <h3>Question: Do you have a college degree or transcript?</h3>
            <p>
              My answer: Yes, I do. I graduated from the Univeristy of Texas at
              Arlington with a B.S. in Computer Science which is my major and my
              minor is in Computer Science. I do have the transcript with me.
            </p>
          </div>

          <div
            className="ParagraphIDQandA"
            id={brightnessValue ? "ParagraphIDQABorder" : null}
          >
            <h3>
              {" "}
              Question: Why do I choose React JS over Vue JS, Angular 18, or
              Angular 19?{" "}
            </h3>

            <p>
              My answer: I chose React JS because Facebook created React JS and
              uses React JS in Facebook and Instagram. Which means that this
              library can be trusted at scale with large amounts of API requests
              and data.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { brightnessValue: state.exampleReducer.brightness };
}

export default withRouter(connect(mapStateToProps, null)(QandA));
