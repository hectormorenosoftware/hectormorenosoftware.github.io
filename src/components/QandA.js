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
            <h3>
              Question: Can you explain what is Full-Stack Software Engineering
              in one paragraph?
            </h3>
            <p>
              My answer: The job of a "server" is to "serve" "JSON" data to the
              "UI" and the "UI" code to the user. The so called "UI" which is a
              website that expects "data" which is always in JSON format, this
              JSON is saved in a so called "database" which can be a SQL, MySQL,
              Mongo DB, PostgreSQL, or any cloud database. The so called
              "server" reads the "database" and formats the data into "JSON"
              format and sends it to the "UI", there are many kinds of servers,
              there are .NET, Java Spring Boot, and Node JS servers and their
              job is always the same.
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
