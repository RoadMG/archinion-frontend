import styled from "styled-components";
import { FontPercentage } from "../Responsive";
const Box = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #a9a6a6;
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
`;

const InstaText = styled.a`
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  text-decoration: none;
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
