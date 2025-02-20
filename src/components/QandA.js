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

          <p className="ParagraphIDQandA">
            {" "}
            Question: Why do you think you can have a career in the United
            States of America, if you are not American?
          </p>

          <p className="ParagraphIDQandA">
            {" "}
            My answer: My nation "Spain" supplied the Americans during the
            American Revolution weapons, money, naval ships, troops, and
            supplies to win the American Revolution against the British Empire.
            My nation "Spain" is the reason you have a nation which is now named
            the United States of America, besides that we the Spanish from
            "Spain" established Texas and California it was part of "New Spain"
            from 1520 to 1820 you can Google these facts.
          </p>

          <p className="ParagraphIDQandA">
            {" "}
            Question: Why do I choose React JS over Vue JS, Angular 18, or
            Angular 19?{" "}
          </p>

          <p className="ParagraphIDQandA">
            My answer: I chose React JS because Facebook created React JS and
            uses React JS in Facebook and Instagram. Which means that this
            library can be trusted at scale with large amounts of API requests
            and data.
          </p>
          <p className="ParagraphIDQandA">
            Question: Why do I choose Node JS over Java Spring Boot and what are
            the advantages of choosing Node JS as a Back-End?{" "}
          </p>
          <p className="ParagraphIDQandA">
            My answer: I choose Node JS because it uses libuv which is a library
            in C to handle all asynchronous behavior, this means that all
            asynchronous behavior will be very fast compared to using Java.
            Apple Inc. uses Node JS to make money that is important to know.
          </p>
          <p className="ParagraphIDQandA">
            {" "}
            Question: What is your recommendation for cloud based database
            systems? <br />
          </p>
          <p className="ParagraphIDQandA">
            My answer: If you want control over your data I recommend you to use
            &nbsp;
            <a href="https://ngrok.com/" target="_blank">
              www.ngrok.com
            </a>
            &nbsp;it will allow you to write and read data from your own machine
            in your own building if you use Node JS. I want to remind you that
            MySQL, PostgreSQL, SQL, and Mongo DB will always give you JSON data
            to allow your server of choice(Spring Boot Java, .NET, or Node JS)
            to send JSON to the UI. Remember that ngrok allows you to create
            API's and allows you to serve data over the internet by using your
            internet router as a tunnel which could save you a lot of money.
            This means that all of your JSON data will be saved in your machine
            instead of someone else's machine and that every API request will be
            handled by your internet router. Remember that Node JS uses libuv to
            handle all asynchronous requests in Node JS, libuv is a library in
            C.
          </p>
          <p className="ParagraphIDQandA">
            {" "}
            Question: Do you have your college transcript with you?
          </p>
          <p className="ParagraphIDQandA">
            My answer: I do, I graduated from the University of Texas at
            Arlington with a B.S. in Computer Science in 2015 my minor is also
            Computer Science I do have my transcript with me wherever I go.
          </p>
          <p className="ParagraphIDQandA">Question: Do you have a github? </p>
          <p className="ParagraphIDQandA">
            My answer: github.com/hectormorenosoftware <br />
            Every single repository in my github has a url in the README.md
            section to show you the website live in the internet.
          </p>
          <p className="ParagraphIDQandA">
            Question: How do you test potential candidates for UI Development or
            Back-End Development?
          </p>
          <p className="ParagraphIDQandA">
            My answer: For UI Development I test a candidate to check if the
            candidate knows what promises are and if the candidate can
            manipulate data in the UI. For Back-End I test to check if the
            candidate can manipulate data in the server and if the candidate
            knows how to write and read into a database. I also check if the
            candidate knows how to test API's before they are in production.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
