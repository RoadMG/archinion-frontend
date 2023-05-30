import React from "react";
import styled from "styled-components";
import { FontPercentage } from "../Responsive";

const Box = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
`;

const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CopyText = styled.p`
  font-weight: 350;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #a9a6a6;
`;

const InstaText = styled.a`
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #a9a6a6;
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
