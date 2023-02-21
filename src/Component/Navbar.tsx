import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  left: 24px;
  top: 19px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const MainBold = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;
`;
const MainLight = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.26em;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <Box>
      <MainBold>ARCHINION</MainBold>
      <MainLight>architecture-union</MainLight>
    </Box>
  );
};

export default Navbar;
