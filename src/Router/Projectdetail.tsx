import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useQuery } from "react-query";
import { IProjectDetailProps } from "../types";
import { getProjectDetail } from "../api";
import styled from "styled-components";
import WidthPercentage, { HeightPercentage } from "../Responsive";
const Box = styled.div`
  height: 100%;
`;
const ProjectBox = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100vw;
  top: 15vh;
  display: flex;
  flex-direction: column;
`;
const ProjectTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const MainImage = styled.img`
  width: 700px;
  height: 700px;
  margin-top: 45px;
`;

const Projectdetail = () => {
  const { projectPk } = useParams();

  const [photoNum, setPhotoNum] = useState(0);

  const { data: projectDetailData } = useQuery<IProjectDetailProps>(
    ["projectDetail", projectPk],
    getProjectDetail
  );

  return (
    <Box>
      <Navbar />
      {projectDetailData ? (
        <ProjectBox>
          <ProjectTitle>{projectDetailData.name}</ProjectTitle>
          <p>{projectDetailData.location} </p>
          {projectDetailData.photo[photoNum].file ? (
            <MainImage src={projectDetailData.photo[photoNum].file} alt="..." />
          ) : (
            <MainImage
              src={projectDetailData.photo[photoNum].urlfile}
              alt="..."
            />
          )}
        </ProjectBox>
      ) : null}
      <Footer />
    </Box>
  );
};

export default Projectdetail;
