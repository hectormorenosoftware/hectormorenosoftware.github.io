import React from "react";
import styled from "styled-components";

const SectionGroup = styled.div`
  background-color: black;
  height: 25rem;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 21rem;
  }
`;

const SectionTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`;

const SectionText = styled.p`
  color: white;

  @media (max-width: 720px) {
    font-size: 18px;
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
