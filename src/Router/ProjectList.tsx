import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProject } from "../api";
import { IProjectProps } from "../types";
import Footer from "../Component/Footer";
import WidthPercentage, { HeightPercentage } from "../Responsive";
import { Link } from "react-router-dom";

const Box = styled.div`
  min-height: 100vh;
`;

const ListBox = styled.div`
  position: absolute;
  top: 13vh;
  width: 95vw;
  margin: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    margin: 2.5vw;
    top: 5vh;
  }
`;
const ListTextMain = styled.p`
  text-align: flex-start;
  font-size: 15px;
  font-weight: 350;
  letter-spacing: 0.75px;
  margin-bottom: 5px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

const ListTextContent = styled.p`
  height: 25px;
  text-align: flex-start;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px 0px 10px 0px;
  &:nth-child(2) {
    overflow: hidden;
  }
  &:nth-child(3) {
    overflow: hidden;
  }

  @media screen and (max-width: 700px) {
    font-size: 10px;
    height: 10px;
    &:nth-child(2) {
      overflow: none;
    }
  }
`;
const ListContentBox = styled(Link)`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr;
  border-bottom-color: #ffffff;
  border-bottom: solid;
  color: #ffffff;
  width: 95vw;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 3fr 2fr 1fr;
  }
`;
const ListMainContentBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr 1fr;
  border-bottom-color: #ffffff;
  border-bottom: solid;
  width: 95vw;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 3fr 2fr 1fr;
  }
`;
const ProjectContent = styled.link``;

export const ModeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 144px;
  justify-content: space-between;
  position: absolute;
  top: ${HeightPercentage(50)};
  left: ${WidthPercentage(900)};
  z-index: 50;

  @media screen and (max-width: 700px) {
    width: 50px;
    top: ${HeightPercentage(20)};
  }
`;

export const ModeLink = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

const ProjectList = () => {
  const { data } = useQuery<IProjectProps[]>(["project"], getProject);

  return (
    <Box>
      <Navbar />
      <ModeBox>
        <ModeLink to={"/project"} style={{ cursor: "pointer" }}>
          Image
        </ModeLink>
        <ModeLink to={"/project/list"} style={{ cursor: "pointer" }}>
          List
        </ModeLink>
      </ModeBox>
      {window.innerWidth > 700 ? (
        <ListBox>
          <ListMainContentBox>
            <ListTextMain>Project</ListTextMain>
            <ListTextMain>Program(s)</ListTextMain>
            <ListTextMain>Location</ListTextMain>
            <ListTextMain>Status</ListTextMain>
            <ListTextMain>Year</ListTextMain>
          </ListMainContentBox>
          {data?.map((props) => (
            <ListContentBox key={props.pk} to={`/project/${props.pk}`}>
              <ListTextContent>{props.name}</ListTextContent>
              <ListTextContent>
                {props.programs.map((prop, id) =>
                  props.programs.length - 1 === id ? (
                    <span key={prop.pk}>{prop.name} </span>
                  ) : (
                    <span key={prop.pk}>{prop.name}, </span>
                  )
                )}
              </ListTextContent>
              <ListTextContent>{props.location}</ListTextContent>
              <ListTextContent>{props.status}</ListTextContent>
              <ListTextContent>{props.year}</ListTextContent>
            </ListContentBox>
          ))}
        </ListBox>
      ) : (
        <ListBox>
          <ListMainContentBox>
            <ListTextMain>Project</ListTextMain>
            <ListTextMain>Location</ListTextMain>
            <ListTextMain>Year</ListTextMain>
          </ListMainContentBox>
          {data?.map((props) => (
            <ListContentBox key={props.pk} to={`/project/${props.pk}`}>
              <ListTextContent>{props.name}</ListTextContent>
              <ListTextContent>
                {
                  props.location.split(",")[
                    props.location.split(",").length - 2
                  ]
                }
                ,
                {
                  props.location.split(",")[
                    props.location.split(",").length - 1
                  ]
                }
              </ListTextContent>
              <ListTextContent>{props.year}</ListTextContent>
            </ListContentBox>
          ))}
        </ListBox>
      )}

      <Footer />
    </Box>
  );
};

export default ProjectList;
