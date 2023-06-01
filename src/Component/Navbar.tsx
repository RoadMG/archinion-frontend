import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FontPercentage } from "../Responsive";
import { Link } from "react-router-dom";

const Box = styled.div<{ crntUrl: string }>`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.crntUrl === "/" ? "flex-end" : "space-between"};
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
  font-size: 35px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #a9a6a6;
`;
const MainLight = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.26em;
  color: #a9a6a6;
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
  z-index: 999;
`;

const MenuText = styled(Link)`
  font-size: 25px;
  color: black;
  text-align: end;
  margin: 5px 15px 0px 0px;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const currentUrl = window.location.pathname;
  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box crntUrl={currentUrl}>
      {currentUrl == "/" ? null : (
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
        </>
      )}
    </Box>
  );
};

export default Navbar;
