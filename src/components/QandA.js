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
            Why do I choose React JS over Vue JS, Angular 18, or Angular 19?{" "}
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
            advantages of choosing Node JS as a Back-End? <br />
            My answer: I choose Node JS because it uses libuv which is a library
            in C to handle all asynchronous behavior, this means that all
            asynchronous behavior will be very fast compared to using Java.
            Apple Inc. uses Node JS to make money that is important to know.
          </p>
          <p style={{ textAlign: "center " }}>
            What is your recommendation for cloud based database systems? <br />
            My answer: If you want control over your data I recommend you to use
            ngrok, it will allow you to write and read data from your own
            machine in your own building if you use Node JS. It will also allow
            you to create as many endpoints(also known as API's) as you would
            like, remember that your machine and your router will be used to
            serve the data including your website.
          </p>
          <p style={{ textAlign: "center" }}>
            Where can I find you if I have any questions? <br /> My answer:I
            currently live in 817 Hidalgo St, Laredo, Texas 78040 a block away
            from the Laredo Police Station. My phone number is 415-212-0456 and
            my e-mail is hectormorenosoftware@gmail.com
          </p>
          <p style={{ textAlign: "center" }}>
            What do you recommend me to use to align content in the UI? <br />
            My answer: I recommend you to use flex box or CSS grid instead of
            writing media queries for absolute or relative elements everytime
            the UI changes in size. I want to remind you that flex box and CSS
            grid where created for you to align content in the UI without having
            to change the left, right, bottom, and top property everytime the UI
            gets resized pixel by pixel. This will save you a lot of code and
            you won't have to use as many media queries as you used to before.
            CSS grid and flex box do not need the left, right, bottom, and top
            properties changed everytime the UI changes in size the browser
            automatically changes the properties to align the content. CSS grid
            and flex box where created for you to stop using the top, left,
            right, and bottom properties and to make it easier for you to align
            content in the UI.
          </p>
          <p style={{ textAlign: "center" }}>
            Do you have your college transcript with you? <br />
            My answer: I do, I graduated from the University of Texas at
            Arlington with a B.S. in Computer Science in 2015 my minor is also
            Computer Science I do have my transcript with me wherever I go.
          </p>
          <p style={{ textAlign: "center" }}>
            Do you have a github? <br />
            My answer: I do I recommend you to go to my github which is
            https://github.com/hectormorenosoftware every single repository in
            my github has a url in the README.md section to show you the website
            live in the internet.
          </p>
          <p style={{ textAlign: "center" }}>
            What do you think about AWS? Do you know of any other options to
            host servers and UI's in the internet? <br />
            My answer: AWS is a trusted source to host your website and server
            using Cloud Pipeline and Elastic Beanstalk. I do like AWS, but if
            you want to know of other options I want to remind you that Sales
            Force owns www.heroku.com which is like AWS it will allow you to
            host your server and UI for a low monthly cost and it is very easy
            to use. Netlify also exists this allows you to connect to your
            github it does have a pipeline for you to track commits and builds,
            but you can only host UI's in Netlify not servers.
          </p>
          <p style={{ textAlign: "center" }}>
            What about charging money? What do you recommend me to use if I want
            to charge customers money? <br />
            My answer: I recommend you to create your own API using the Stripe
            npm package. This will allow you to charge credit cards and debit
            cards very easily in your website.
          </p>
          <p style={{ textAlign: "center" }}>
            I'm new to React JS and Node JS how can I change my development
            environment to work in development, QA, Staging, or Production
            databases? <br />
            My answer: I want to remind you that if you are using React JS and
            Redux for your UI that it will be easier to control the stages of
            your UI if you are using webpack. There is only two environments
            that are available in webpack development and production. For the
            Node JS server and your choice of database I recommend you to send a
            flag from the React JS UI to indicate the server which database to
            use.
          </p>
          <p style={{ textAlign: "center" }}>
            What about apps in iOS and Android? Have you ever worked in apps in
            iOS and Android? What do you recommend me to do if I have any ideas
            in iOS and Android? <br />
            My answer: Expo Studio is what I use to develop apps in iOS and
            Android, I want to remind you that Expo Studio for iOS and Android
            changes a lot and sometimes it doesn't work very well that is why
            people choose full-stack web development and responsive websites
            over iOS and Android development. I want to also remind you that to
            send your app into the iOS store you will need to buy a license and
            there is no way to know how much that license will be. I want to
            remind you that Facebook and Apple uses React Native for iOS and
            Android app development. I want to also remind you that Apple
            sometimes doesn't allow people to upload new builds of apps to the
            iOS store. To try your apps as you write React Native code for iOS
            and Android I recommend you to use Android Studio's Emulator and
            XCode iOS emulator this will allow you to try your apps in iPhones,
            iPads, Android Phones, or Android Tablets as you make changes to
            your code. Remember that in React Native for iOS and Android there
            is no "div" everything is a block "view" that you can style and
            there is only "text" or "image" classes. I have built apps in iOS
            and Android before if you have access to Expo Studio please take a
            look at my apps in iOS and Android.
          </p>
          <p style={{ textAlign: "center" }}>
            How do you test potential candidates for UI Development or Back-End
            Development?
            <br />
            My answer: For UI Development I test a candidate to check if the
            candidate knows what promises are and if the candidate can
            manipulate data in the UI. For Back-End I test to check if the
            candidate can manipulate data in the server and if the candidate
            knows how to write and read into a database. I also check if the
            candidate knows how to test API's before they are in production.
          </p>
          <p style={{ textAlign: "center" }}>
            Where are you from? Are you a legal resident or citizen?
            <br />
            My answer: I was born in Mexico, but my step father gave me a green
            card at the age of 18, at that age in 2009 I enlisted into the U.S.
            Marine Corps Reserve, after Infantry School in Camp Pendleton,
            California I was given a U.S. Citizenship by the Bush Administration
            8 months after I graduated from Infantry School. I did volunteer to
            deploy to Iraq and Afghanistan and I have tried to re-enlist as 0311
            active duty, but I was not successful even though I have an
            Honorable Discharge.
          </p>
          <p style={{ textAlign: "center" }}>
            What do you do in your free time? <br />
            My answer: I like to study books and I like to watch movies.
          </p>
          <p style={{ textAlign: "center" }}>
            What is the difference between hash routing and server side routing?{" "}
            <br />
            My answer: The difference between hash routing and server side
            routing is that whenever you use hash routing you send all of the
            website in the first request including every route. Whenever you use
            server side routing for every page you will make new requests every
            single time you try to load a new page which will load the HTML and
            CSS including all of the images or data associated with the route
            which can cost you more money.
          </p>
          <p style={{ textAlign: "center" }}>
            What are your thoughts about cache for images and css? <br />
            My answer: I think you should avoid it because there is no way to
            know how much data your user has for this operation, it might make
            his machine crash.
          </p>
          <p style={{ textAlign: "center" }}>
            What about passwords management what approach do you take? <br />
            My answer: I want to remind you that whenever you send data through
            HTTPS everything is encrypted which means that every chunk of data
            that is sent to the server with HTTP Headers will be secured with
            certificates. I would recommend you to store the password in your
            database since the password is already sensitive information anyway.
          </p>
          <p style={{ textAlign: "center" }}>
            What about QA do you think they need an engineering background to
            help? <br />
            My answer: No, a QA Analyst or QA Engineer doesn't need any
            engineering experience to be able to help in a software engineering
            team. A QA doesn't need a college degree to be able to collaborate.
          </p>
          <p style={{ textAlign: "center" }}>
            Do you feel Project Managers make your life easier whenever you are
            trying to deliver software?
            <br />
            My answer: Yes, I do feel Project Managers are important to a
            software engineering team.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
