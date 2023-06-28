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
`;

const ProjBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  top: 10vh;
  margin: 0px 24px 0px 24px;
  gap: 24px;
`;

const ProjLink = styled(Link)`
  width: 447px;
`;

const ProjImg = styled.img`
  width: 447px;
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
