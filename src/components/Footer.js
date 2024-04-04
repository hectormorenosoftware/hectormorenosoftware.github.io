import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
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

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;
const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
  }

  a:hover {
    color: black;
  }
`;

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Footer = ({ children }) => {
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/hector-jair-moreno-gomez-93200728a/"
    );
  };
  return (
    <FooterGroup>
      <Text>
        Take a look at my Linked In profile by clicking on the button below
      </Text>
      <Button onClick={openLinkedIn}>Look at Linked In </Button>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
