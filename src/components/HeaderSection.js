import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.PureComponent {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <a href="#companies">Companies</a>
          <a href="#about">About</a>
          <a href="#creative-work">Linked In</a>
        </div>
      </div>
    );
  }
}

export default Header;
