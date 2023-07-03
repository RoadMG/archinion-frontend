import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProject } from "../api";
import { IProjectProps } from "../types";
import Footer from "../Component/Footer";
import WidthPercentage from "../Responsive";
import { Link } from "react-router-dom";
import { ModeBox, ModeLink } from "./ProjectList";

const Box = styled.div`
  min-height: 100vh;
  position: relative;
  padding-top: 13vh;
  padding-bottom: 5vh;
`;

const ProjBox = styled.div`
  width: 98vw;
  display: grid;
  grid-template-columns: repeat(3, minmax(25%, auto));
  grid-template-rows: repeat(auto-fill, minmax(10%, auto));
  margin: 0px 24px 0px 24px;
`;

const ProjLink = styled(Link)`
  padding: 0;
`;

const ProjImg = styled.img`
  margin: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Project = () => {
  const { data } = useQuery<IProjectProps[]>(["project"], getProject);

  return (
    <Box>
      <Navbar />
      <ModeBox>
        <ModeLink to={"/project"} style={{ cursor: "pointer", color: "white" }}>
          Image
        </ModeLink>
        <ModeLink
          to={"/project/list"}
          style={{ cursor: "pointer", color: "white" }}
        >
          List
        </ModeLink>
      </ModeBox>
      <ProjBox>
        {data?.map((props) => (
          <ProjLink to={`/project/${props.pk}`} key={props.pk}>
            {props.photo[0].urlfile ? (
              <ProjImg src={props.photo[0].urlfile} alt="..." />
            ) : (
              <ProjImg
                src={`http://localhost:8000/${props.photo[0].file}`}
                alt="..."
              />
            )}
          </ProjLink>
        ))}
      </ProjBox>
      <Footer />
    </Box>
  );
};

export default Project;
