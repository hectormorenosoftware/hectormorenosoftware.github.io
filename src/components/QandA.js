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
            How many regressions(also known as bugs or glitches) should a code
            base have before considering to start over? <br />
            My answer: I think once a code base has 20 bugs(also known as
            glitches or errors) you should start over.
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
            Where can I find you if I have any questions? <br /> My answer:I
            currently live in 817 Hidalgo St, Laredo, Texas 78040 a block away
            from the Laredo Police Station. My phone number is 415-212-0456 and
            my e-mail is hectormorenosoftware@gmail.com
          </p>
          <p className="ParagraphIDQandA">
            How can I deploy a new site without connecting to git and without
            using AWS? <br />
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
          <p className="ParagraphIDQandA">
            What about charging money? What do you recommend me to use if I want
            to charge customers money? <br />
            My answer: I recommend you to create your own API using the Stripe
            npm package. This will allow you to charge credit cards and debit
            cards very easily in your website.
          </p>
          <p className="ParagraphIDQandA">
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
          <p className="ParagraphIDQandA">
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
          <p className="ParagraphIDQandA">
            What do you do in your free time? <br />
            My answer: I like to study books and I like to watch movies.
          </p>
          <p className="ParagraphIDQandA">
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
          <p className="ParagraphIDQandA">
            What are your thoughts about cache for images and css? <br />
            My answer: I think you should avoid it because there is no way to
            know how much data your user has for this operation, it might make
            his machine crash.
          </p>
          <p className="ParagraphIDQandA">
            What about passwords management what approach do you take? <br />
            My answer: I want to remind you that whenever you send data through
            HTTPS everything is encrypted which means that every chunk of data
            that is sent to the server with HTTP Headers will be secured with
            certificates. I would recommend you to store the password in your
            database since the password is already sensitive information anyway.
          </p>
          <p className="ParagraphIDQandA">
            What about QA do you think they need an engineering background to
            help? <br />
            My answer: No, a QA Analyst or QA Engineer doesn't need any
            engineering experience to be able to help in a software engineering
            team. A QA doesn't need a college degree to be able to collaborate.
          </p>
          <p className="ParagraphIDQandA">
            Do you feel Project Managers make your life easier whenever you are
            trying to deliver software?
            <br />
            My answer: Yes, I do feel Project Managers are important to a
            software engineering team.
          </p>
          <p className="ParagraphIDQandA">
            My iphone, ipad, and my android phone sometimes shuts down and
            sometimes is very slow, why does this happen? <br />
            My answer: This happens because you have too many Safari or Google
            Chrome browser windows open, too many Google Chrome or Safari
            browser tabs open, and because you have too many apps open too.
            There are a lot of YouTube videos that can help you fix this issue,
            you can do it yourself and it shouldn't take more than 10 minutes.
            You shouldn't need the help of a professional thanks to the YouTube
            videos. I wouldn't recommend to have more than 2 apps open at a
            time, I also wouldn't recommend to have more than 2 Safari or Google
            Chrome browser windows or browser tabs open at a time. <br />
            Examples of browsers: Google Chrome, Internet Explorer, Safari,
            Firefox, and Microsoft Edge. <br />
            Examples of apps: Facebook, Instagram, Snapchat, and Uber.
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
          <p className="ParagraphIDQandA">
            {" "}
            Do you know how to download music for free? And do you know how to
            add the song to your iphone to listen to it? <br />
            My answer: Yes, this website below will allow you to download free
            mp3 files to your desktop pc or to your laptop. <br />
            <a href="https://e2.freemp3cloud.com/" target="_blank">
              https://e2.freemp3cloud.com/
            </a>
            <br />
            The website below will allow you to turn the mp3 songs into m4a
            songs for your iphone <br />
            <a href="https://cloudconvert.com/" target="_blank">
              {" "}
              https://cloudconvert.com/
            </a>
            <br />
            Just remember that whenever you click on a song you will be
            redirected to another page, however, if you go back to the website
            that has all of the songs you should be able to download the song
            you chose. The page that opens I recommend you to do nothing there
            just close it. Remember that iphones only accept m4a songs not mp3
            songs every mp3 song you download you will have to turn into a m4a
            song for your iphone, mp3 songs are for android phones and pc, m4a
            songs are for iphones and ipads.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(QandA));
