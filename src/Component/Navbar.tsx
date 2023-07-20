import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";

const Box = styled.div<{ crntUrl: string }>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.crntUrl === "/" ? "flex-end" : "space-between"};
  padding: 5px 20px 0 20px;
  flex-direction: row;
  z-index: 20;
`;
const MainTextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const MainBold = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;

  @media screen and(max-width: 700px) {
    font-size: 20px;
  }
`;
const MainLight = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.26em;
  color: #ffffff;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
const MenuBox = styled.div`
  position: absolute;
  top: 50px;
  right: 5px;
  padding: 5px 5px 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #e5e5e5;
  border-radius: 5px;
  opacity: 0.8;
  z-index: 20;
`;

const MenuText = styled(Link)`
  font-size: 25px;
  color: black;
  text-align: end;
  margin: 5px 15px 0px 0px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 10px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const currentUrl = window.location.pathname;
  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box crntUrl={currentUrl}>
      {currentUrl === "/" ? null : (
        <MainTextBox as="a" href="/">
          <MainBold>ARCHINION</MainBold>
          <MainLight>architecture-union</MainLight>
        </MainTextBox>
      )}

      {menuOpen === true ? (
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
          <Overlay onClick={menuClick}>
            <MenuBox>
              <MenuText onClick={menuClick} to={"/project"}>
                Project
              </MenuText>
              <MenuText onClick={menuClick} to={"/inform"}>
                Inform
              </MenuText>
              <MenuText onClick={menuClick} to={"/about"}>
                About
              </MenuText>
              <MenuText onClick={menuClick} to={"/contact"}>
                Contact
              </MenuText>
            </MenuBox>
          </Overlay>
        </>
      )}
    </Box>
  );
};

export default Navbar;
