import React from "react";
import Navbar from "../Component/Navbar";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProject } from "../api";
import { IProjectProps } from "../types";
import Footer from "../Component/Footer";
import WidthPercentage from "../Responsive";

const ProjBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  top: 10vh;
  margin: 0px 24px 0px 24px;
  gap: 24px;
`;

const ProjLink = styled.a`
  width: 447px;
`;

const ProjImg = styled.img`
  width: 447px;
`;

const ProjectContent = styled.link``;

const Project = () => {
  const { data, isLoading } = useQuery<IProjectProps[]>(
    ["project"],
    getProject
  );

  return (
    <div>
      <Navbar />
      <ProjBox>
        {data?.map((props) => (
          <ProjLink key={props.pk}>
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
    </div>
  );
};

export default Project;
