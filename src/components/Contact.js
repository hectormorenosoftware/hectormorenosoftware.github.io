import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ChangeBrightness from "./ChangeBrightness";
import GoBackButton from "./GoBackButton";

import "./Contact.css";

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openLinkedIn = () => {
    return window.open(
      "https://www.linkedin.com/in/hector-moreno-93200728a/",
      "_blank"
    );
  };

  openGithub = () => {
    return window.open("https://github.com/hectormorenosoftware", "_blank");
  };

  callPhoneNumber = () => {
    return window.open("tel:4152120456");
  };

  sendEmail = () => {
    return window.open("mailto:hectormorenosoftware@gmail.com");
  };

  render() {
    return (
      <div className="ContactGroup">
        <ChangeBrightness />
        <GoBackButton />
        <p style={{ textAlign: "center" }}>
          Contact me by tapping or clicking on any of the icons below from 9am
          to 5pm CST.
        </p>
        <div className="IconFlexBox">
          <i
            className={
              window.innerWidth <= 375
                ? "fa-solid fa-envelope fa-1x"
                : "fa-solid fa-envelope fa-2x"
            }
            onClick={this.sendEmail}
          ></i>
          <i
            className={
              window.innerWidth <= 375
                ? "fa-solid fa-phone fa-1x"
                : "fa-solid fa-phone fa-2x"
            }
            onClick={this.callPhoneNumber}
          ></i>

          <i
            className={
              window.innerWidth <= 375
                ? "fa-brands fa-linkedin fa-1x"
                : "fa-brands fa-linkedin fa-2x"
            }
            onClick={this.openLinkedIn}
          ></i>
          <i
            className={
              window.innerWidth <= 375
                ? "fa-brands fa-github fa-1x"
                : "fa-brands fa-github fa-2x"
            }
            onClick={this.openGithub}
          ></i>
        </div>
        <div className="CopyRightGroup">
          {" "}
          <p>&copy;2025 Portfolio Hector Moreno's</p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Contact));
