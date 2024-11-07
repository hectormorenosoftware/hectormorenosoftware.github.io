import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
  position: absolute;
  width: 100%;
  height: 40%;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
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
  width: 20rem;
  height: 4rem;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  color: #486791;
  font-size: 15px;
  word-wrap: break-word;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Footer = ({ children }) => {
  const openLinkedIn = () => {
    return window.open(
      "https://www.linkedin.com/in/hector-moreno-93200728a/",
      "_blank"
    );
  };

  const openGithub = () => {
    return window.open("https://github.com/hectormorenosoftware", "_blank");
  };

  const openStackOverflow = () => {
    return window.open("https://stackoverflow.com/users/5167502/hjm", "_blank");
  };
  return (
    <FooterGroup>
      <Text>
        Take a look at my Linked In profile by clicking on the button below
      </Text>
      <Button onClick={openLinkedIn}>Linked In </Button>
      <Button onClick={openGithub}>Github </Button>
      <Button onClick={openStackOverflow}>Stack Overflow </Button>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
