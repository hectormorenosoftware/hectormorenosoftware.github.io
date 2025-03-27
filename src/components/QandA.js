import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
    return (
      <div className="HeroQAndA">
        <div className="FlexColumn">
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

          <div className="ParagraphIDQandA">
            <h3>
              Question: What makes you stand-out over the rest of candidates?
            </h3>
            <p>
              My answer: I built Apple TV+ alone, you can verify this at Apple
              Inc. through Tim Cook.
            </p>
          </div>

          <div className="ParagraphIDQandA">
            <h3>Question: What makes you better than other candidates?</h3>
            <p>
              My answer: That I can code in front of you without looking at
              Google all of the time.
            </p>
          </div>

          <div className="ParagraphIDQandA">
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

          <div className="ParagraphIDQandA">
            <h3>
              Question: Why do I choose Node JS over Java Spring Boot and what
              are the advantages of choosing Node JS as a Back-End?{" "}
            </h3>
            <p>
              My answer: I choose Node JS because it uses libuv which is a
              library in C to handle all asynchronous behavior, this means that
              all asynchronous behavior will be very fast compared to using
              Java. Apple Inc. uses Node JS to make money that is important to
              know.
            </p>
          </div>

          <div className="ParagraphIDQandA">
            <h3>
              {" "}
              Question: What is your recommendation for cloud based database
              systems? <br />
            </h3>
            <p>
              My answer: If you want control over your data I recommend you to
              use &nbsp;
              <a href="https://ngrok.com/" target="_blank">
                www.ngrok.com
              </a>
              &nbsp;it will allow you to write and read data from your own
              machine in your own building if you use Node JS. I want to remind
              you that MySQL, PostgreSQL, SQL, and Mongo DB will always give you
              JSON data to allow your server of choice(Spring Boot Java, .NET,
              or Node JS) to send JSON to the UI. Remember that ngrok allows you
              to create API's and allows you to serve data over the internet by
              using your internet router as a tunnel which could save you a lot
              of money. This means that all of your JSON data will be saved in
              your machine instead of someone else's machine and that every API
              request will be handled by your internet router. Remember that
              Node JS uses libuv to handle all asynchronous requests in Node JS,
              libuv is a library in C.
            </p>
          </div>

          <div className="ParagraphIDQandA">
            <h3>
              Question: How do you test potential candidates for UI Development
              or Back-End Development?
            </h3>
            <p>
              My answer: For UI Development I test a candidate to check if the
              candidate knows what promises are and if the candidate can
              manipulate data in the UI. For Back-End I test to check if the
              candidate can manipulate data in the server and if the candidate
              knows how to write and read into a database. I also check if the
              candidate knows how to test API's before they are in production.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
