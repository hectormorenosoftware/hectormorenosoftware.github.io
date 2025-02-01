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
      <div className="HeroQAndA">
        <div className="FlexColumn">
          <button
            type="button"
            className="BackButtonQandA"
            onClick={this.GoBackEvent}
          >
            Go Back
          </button>
          <h1>Q and A</h1>
          <p className="ParagraphIDQandA">
            How can I deploy a new website into the internet if I'm not an
            software engineer? <br />
            My answer: In &nbsp;
            <a href="https://www.netlify.com/" target="_blank">
              www.netlify.com
            </a>
            &nbsp; you can sign up by using your email, in the "Sites" section
            right above the "Builds" section, if you scroll down all the way to
            the bottom of the page there is an option for you to browse for a
            folder in your computer, most of the time the UI code it's on a
            "dist" or "build" folder in your computer. It will be free of cost
            initially, but if you choose to buy a domain name it will cost you
            $12 per year. After you deploy your website by choosing a folder
            from your computer, on the "Sites" section click on your website and
            you will see a url to your website in green that ends with the names
            ".netlify.app". There will also be a "Set up your site" section
            right below your url with a "1, 2, 3" follow the steps to buy a
            domain and to secure your website with https. Always remember that
            the navbar it's on the left side of the website it has logo's and
            they need to be clicked for you to see text. Also remember that
            Netlify is only for UI code which is HTML, CSS, and JavaScript,
            servers can't be uploaded to Netlify. If you need API's I would
            recommend you to use Node JS and Mongo DB.
          </p>

          <p className="ParagraphIDQandA">
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
          <p className="ParagraphIDQandA">
            Why do I choose Node JS over Java Spring Boot and what are the
            advantages of choosing Node JS as a Back-End? <br />
            My answer: I choose Node JS because it uses libuv which is a library
            in C to handle all asynchronous behavior, this means that all
            asynchronous behavior will be very fast compared to using Java.
            Apple Inc. uses Node JS to make money that is important to know.
          </p>
          <p className="ParagraphIDQandA">
            What is your recommendation for cloud based database systems? <br />
            My answer: If you want control over your data I recommend you to use
            ngrok, it will allow you to write and read data from your own
            machine in your own building if you use Node JS. It will also allow
            you to create as many endpoints(also known as API's) as you would
            like, remember that your machine and your router will be used to
            serve the data including your website.
          </p>

          <p className="ParagraphIDQandA">
            Do you have your college transcript with you? <br />
            My answer: I do, I graduated from the University of Texas at
            Arlington with a B.S. in Computer Science in 2015 my minor is also
            Computer Science I do have my transcript with me wherever I go.
          </p>
          <p className="ParagraphIDQandA">
            Do you have a github? <br />
            My answer: github.com/hectormorenosoftware <br />
            Every single repository in my github has a url in the README.md
            section to show you the website live in the internet.
          </p>

          <p className="ParagraphIDQandA">
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

          <p className="ParagraphIDQandA">
            My laptop and my desktop computer sometimes gets very slow and
            sometimes it shuts down, why does this happen? <br />
            My answer: It's because you have too many desktop applications open
            and because you have too many Google Chrome, Firefox, Safari,
            Microsoft Edge, or Internet Explorer browser windows or browser tabs
            open at the same time. There are a lot of videos in YouTube that can
            help you fix this issue, it shouldn't take more than 10 minutes to
            fix this issue, and you shouldn't need a professional to help you. I
            would recommend to have only two Safari, Google Chrome, Firefox,
            Microsoft Edge, or Internet Explorer tabs or windows open at the
            same time, but no more than two. I would also recommend to not have
            more than two desktop applications open at the same time such as
            Microsoft Word and Microsoft Power Point. <br />
            Examples of browsers: Google Chrome, Internet Explorer, Safari,
            Firefox, and Microsoft Edge. <br />
            Examples of desktop apps: Microsoft Excel, Microsoft Word, and
            Microsoft Power Point.
          </p>
          <p className="ParagraphIDQandA">
            My iphone and my android phone ran out of memory which makes it
            impossible for me to take new pictures, I don't want to buy a new
            phone what can I do about this? Are there any options that are
            affordable? <br />
            My answer: Yes there is an affordable option, you can use iCloud for
            iOS or Google Cloud Photos and save all of your photos and videos
            there. After that you can delete every picture from you phone since
            it's saved already in iCloud or Google Cloud Photos. iCloud and
            Google Cloud is very affordable is like having a USB in the internet
            of at least 100GB for like $5 per month.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
