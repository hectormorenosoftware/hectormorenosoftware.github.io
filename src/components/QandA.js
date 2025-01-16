import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class QandA extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  GoBackEvent = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Hero" style={{ height: "100vh", overflowX: "hidden" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={this.GoBackEvent}
            style={{
              width: "20rem",
              height: "4rem",
              margin: "2rem",
              borderRadius: "30px",
              cursor: "pointer",
              color: "white",
              backgroundColor: "rgb(10, 102, 194)",
              fontSize: "24px",
              fontWeight: "600",
              border: "none",
            }}
          >
            Go Back
          </button>
          <h1>Q and A</h1>
          <p style={{ textAlign: "center" }}>
            How many regressions(also known as bugs or glitches) should a code
            base have before considering to start over? <br />
            My answer: I think once a code base has 20 bugs(also known as
            glitches or errors) you should start over.
          </p>
          <p style={{ textAlign: "center" }}>
            Why do I choose React JS over Vue JS or Angular 5, 6, 7, or 8?{" "}
            <br />
            My answer: I chose React JS because Facebook created React JS and
            uses React JS in Facebook and Instagram. Which means that this
            library can be trusted at scale with large amounts of API requests
            and data. Apple Inc., Microsoft, Linked In, AT&T, T-Mobile, Verizon,
            Amazon, Nike, Chase Bank, Wells Fargo Bank, Bank of America,
            American Express, Visa, Master Card, American Airlines, United
            Airlines, Play Station, Xbox, Sony, Panasonic, Walmart, Costco,
            Sam's Club, Sprouts, Target, General Motors, Tesla, Ford, and the
            U.S. Federal Government use React JS as well to generate revenue.
          </p>
          <p style={{ textAlign: "center " }}>
            Why do I choose Node JS over Java Spring Boot and what are the
            advantages of choosing Node JS as a back-end? <br />
            My answer: I choose Node JS because it uses libuv which is a library
            in C to handle all asynchronous behavior, this means that all
            asynchronous behavior will be very fast compared to using Java.
            Apple Inc. uses Node JS to make money that is important to know.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
