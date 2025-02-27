import React from "react";
import styled from "styled-components";

const SectionGroup = styled.div`
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  background-color: black;
  padding: 70px 20px;
`;

const SectionTitleGroup = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 20px 20px;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`;

const SectionText = styled.p`
  color: white;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

const Section = (props) => (
  <SectionGroup image={null}>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
);

export default Section;
