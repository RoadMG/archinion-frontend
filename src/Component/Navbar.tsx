import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WidthPercentage, {
  FontPercentage,
  HeightPercentage,
} from "../Responsive";
import { Link } from "react-router-dom";

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
const MenuBox = styled.div`
  position: absolute;
  right: 0;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 15vw;
  background-color: black;
`;

const MenuText = styled(Link)`
  font-size: ${FontPercentage(25)};
  text-align: end;
  margin: 5px 15px 0px 0px;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box>
      <MainTextBox as="a" href="/">
        <MainBold>ARCHINION</MainBold>
        <MainLight>architecture-union</MainLight>
      </MainTextBox>
      {menuOpen == true ? (
        <MenuIcon
          sx={{ fontSize: 40, marginTop: "0.2em", cursor: "pointer" }}
          onClick={menuClick}
        />
      ) : (
        <>
          <CloseIcon
            sx={{
              fontSize: 40,
              marginTop: "0.2em",
              zIndex: 20,
              cursor: "pointer",
            }}
            onClick={menuClick}
          />
          <MenuBox>
            <MenuText to={"/project"}>Project</MenuText>
            <MenuText to={"/inform"}>Inform</MenuText>
            <MenuText to={"/about"}>About</MenuText>
            <MenuText to={"/contact"}>Contact</MenuText>
          </MenuBox>
        </>
      )}
    </Box>
  );
};

export default Navbar;
