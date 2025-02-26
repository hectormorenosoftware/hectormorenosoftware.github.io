import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 100vh;
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
    color: #0a66c2;
    background: white;
    border: 3px solid #0a66c2;
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

  const callPhoneNumber = () => {
    return window.open("tel:4152120456");
  };

  const sendEmail = () => {
    return window.open("mailto:hectormorenosoftware@gmail.com");
  };

  const sendWhatsapp = () => {
    return window.open("https://api.whatsapp.com/send?phone=4152120456");
  };

  return (
    <FooterGroup>
      <Text>
        Contact Hector anyway you would like by tapping on a button below or
        clicking.
      </Text>
      <Button onClick={openLinkedIn}>Linked In</Button>
      <Button onClick={openGithub}>Github</Button>
      <Button onClick={sendEmail}>Send Email</Button>
      <Button onClick={callPhoneNumber}>Call Phone</Button>
      <Button onClick={sendWhatsapp}>WhatsApp</Button>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
