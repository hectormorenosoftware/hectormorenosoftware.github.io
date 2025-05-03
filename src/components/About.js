import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ChangeBrightness from "./ChangeBrightness";
import GoBackButton from "./GoBackButton";

import "./About.css";

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SectionGroup">
        <ChangeBrightness />
        <GoBackButton />
        <div className="SectionTitleGroup">
          <h3 className="SectionTitle">About</h3>
          <p className="SectionText">
            Hector is a Full-Stack Software Engineer with over 6 years of
            experience that specializes in HTML5, CSS3, SCSS, JavaScript, JSX,
            React JS, React Native, Redux, Node JS, Express JS, AWS, MySQL,
            PostgreSQL, and Mongo DB. He is a Computer Science graduate from the
            University of Texas at Arlington and the Full-Stack Software
            Engineer that architected, developed, and designed Apple TV+ and
            Paramount+. The Moreno family served in the Civil War in the
            Confederacy and also served in the American Revolutionary War.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(About));
