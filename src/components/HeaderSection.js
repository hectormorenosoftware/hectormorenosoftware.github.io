import React from "react";
import { withRouter } from "react-router-dom";
import "./Header.css";

class Header extends React.PureComponent {
  goToContactPage = () => {
    const { history } = this.props;

    return history.push("/contact");
  };

  goToQandAPage = () => {
    const { history } = this.props;

    return history.push("/questions");
  };

  goToCompaniesPage = () => {
    const { history } = this.props;
    return history.push("/companies");
  };

  goToAbout = () => {
    const { history } = this.props;
    return history.push("/about");
  };

  goToContact = () => {
    const { history } = this.props;
    return history.push("/contact");
  };

  render() {
    return (
      <div className="Header">
        <div className="HeaderGroup">
          <a onClick={this.goToCompaniesPage}>Companies</a>
          <a onClick={this.goToAbout}>About</a>
          <a onClick={this.goToContact}>Contact</a>
          <a onClick={this.goToQandAPage}>Q and A</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
