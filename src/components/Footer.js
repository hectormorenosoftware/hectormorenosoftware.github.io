import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  text-align: center;
`;

const Copyright = styled.div`
  color: #486791;
  font-size: 15px;
  word-wrap: break-word;
  text-align: center;
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

  const routeToStackOverflowProfile = () => {
    return window.open("https://stackoverflow.com/users/5167502/hjm");
  };

  const routeToFacebookProfile = () => {
    return window.open(
      "https://www.facebook.com/people/Hector-Moreno/pfbid02vhDX2CRTqKJ3UGbstXUiRGuZKHgco7eiphRqao7QEzJzCTCLtsnYdV8taf75XFyTl/"
    );
  };

  return (
    <React.Fragment>
      <Text>
        Contact Hector anyway you would like by tapping or clicking on any of
        the icons below.
      </Text>
      <FooterGroup>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-brands fa-linkedin fa-1x"
              : "fa-brands fa-linkedin fa-2x"
          }
          onClick={openLinkedIn}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-brands fa-github fa-1x"
              : "fa-brands fa-github fa-2x"
          }
          onClick={openGithub}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-brands fa-stack-overflow fa-1x"
              : "fa-brands fa-stack-overflow fa-2x"
          }
          onClick={routeToStackOverflowProfile}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-brands fa-facebook fa-1x"
              : "fa-brands fa-facebook fa-2x"
          }
          onClick={routeToFacebookProfile}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-solid fa-phone fa-1x"
              : "fa-solid fa-phone fa-2x"
          }
          onClick={callPhoneNumber}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-solid fa-envelope fa-1x"
              : "fa-solid fa-envelope fa-2x"
          }
          onClick={sendEmail}
        ></i>
        <i
          className={
            window.innerWidth <= 375
              ? "fa-brands fa-whatsapp fa-1x"
              : "fa-brands fa-whatsapp fa-2x"
          }
          onClick={sendWhatsapp}
        ></i>
      </FooterGroup>
      <Copyright>{children}</Copyright>
    </React.Fragment>
  );
};

export default Footer;
