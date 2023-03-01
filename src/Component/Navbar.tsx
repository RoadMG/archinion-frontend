import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import WidthPercentage, {
  FontPercentage,
  HeightPercentage,
} from "../Responsive";

const Box = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 0 20px;
  flex-direction: row;
`;
const MainTextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const MainBold = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: ${FontPercentage(35)};
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;
`;
const MainLight = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: ${FontPercentage(20)};
  text-align: center;
  letter-spacing: 0.26em;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <Box>
      <MainTextBox as="a" href="/">
        <MainBold>ARCHINION</MainBold>
        <MainLight>architecture-union</MainLight>
      </MainTextBox>
      <MenuIcon sx={{ fontSize: 40, marginTop: "0.2em" }} />
    </Box>
  );
};

export default Navbar;
