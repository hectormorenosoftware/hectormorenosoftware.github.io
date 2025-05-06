import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChangeBrightness from "./ChangeBrightness";
import GoBackButton from "./GoBackButton";

class Questions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { brightnessValue } = this.props;

    return (
      <div className="HeroQAndA">
        <div className="FlexColumn">
          <ChangeBrightness />
          <GoBackButton />
          <h1
            style={{
              fontWeight: "350",
            }}
          >
            Questions
          </h1>
          <div
            className="ParagraphIDQandA"
            id={brightnessValue ? "ParagraphIDQABorder" : null}
          >
            <h3>Question: How can I verify your professional experience?</h3>
            <p>
              My answer: You can verify my professional experience through the
              IRS for every year I have worked. Click &nbsp;
              <a
                href="https://www.irs.gov/individuals/get-transcript"
                target="_blank"
              >
                here
              </a>{" "}
              to request Hector Moreno's tax transcripts to verify his
              experience through the IRS(Internal Revenue Service).
            </p>
          </div>
          <div
            className="ParagraphIDQandA"
            id={brightnessValue ? "ParagraphIDQABorder" : null}
          >
            <h3>Question: Do you have a college degree?</h3>
            <p>
              My answer: Yes, I graduated from the University of Texas at
              Arlington with a B.S. in Computer Science which is my major and my
              minor it's in Computer Science my GPA is 4.0.
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
          <div
            className="ParagraphIDQandA"
            id={brightnessValue ? "ParagraphIDQABorder" : null}
          >
            <h3>Question: What is your hourly rate?</h3>
            <p>My answer: $50 an hour or $95k a year.</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { brightnessValue: state.universalReducer.brightness };
}

export default withRouter(connect(mapStateToProps, null)(Questions));
