import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: #0a66c2;
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <div className="Hero">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            padding: "20px 20px 20px 20px",
          }}
        >
          <h1>Contact</h1>
          <Button onClick={this.goBack}>Go Back</Button>
          <p style={{ textAlign: "center" }}>
            Please contact me through email at
            <a
              style={{ textTransform: "lowercase" }}
              href="mailto: hectormorenosoftware@gmail.com"
            >
              hectormorenosoftware@gmail.com
            </a>
            or call me at
            <a href="tel:4152120456">415-212-0456</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
