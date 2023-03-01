import React from "react";
import styled from "styled-components";
import { FontPercentage } from "../Responsive";

const Box = styled.div`
  position: absolute;
  top: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CopyText = styled.p`
  font-weight: 350;
  font-size: ${FontPercentage(15)};
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
`;

const InstaText = styled.a`
  font-size: ${FontPercentage(20)};
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <Box>
      <CopyBox>
        <CopyText>
          Copyright ©{" "}
          <span style={{ fontSize: `${FontPercentage(17)}` }}>ARCHINION</span>
        </CopyText>
        <CopyText>all rights reserved</CopyText>
      </CopyBox>
      <InstaText href="https://www.instagram.com/archinion/">
        Instagram
      </InstaText>
    </Box>
  );
};

export default Footer;
