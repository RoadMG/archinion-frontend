import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useQuery } from "react-query";
import { IInformPhotoProps, IProjectDetailProps } from "../types";
import { getProjectDetail } from "../api";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Box = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 5vh;
`;
const ProjectBox = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
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
  height: 700px;
  margin-top: 45px;
  cursor: pointer;
`;
const DescriptBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 15px;
  width: 100vw;
  color: #ffffff;
  min-height: 30vh;
  margin: 0px 30px 0px 50px;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: start;
`;

const ArrowBox = styled.div`
  margin-top: 15px;
  width: 235px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SmallImageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  color: #ffffff;
`;

const SmallImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StatusSubject = styled.p`
  font-style: normal;
  font-weight: 350;
  font-size: 15px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.05em;
`;
const Status = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  align-items: center;
  letter-spacing: 0.05em;
`;

const PhotoOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: ${document.documentElement.clientHeight};
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 30;
  cursor: pointer;
`;

const OverlayPhoto = styled.img`
  margin: 20px 20px 20px 20px;
  height: 100vh;
`;

const Projectdetail = () => {
  const { projectPk } = useParams();

  const [photoNum, setPhotoNum] = useState(0);
  const [photoClick, setPhotoClick] = useState(true);

  const onPhotoClick = () => {
    setPhotoClick(!photoClick);
  };

  const { data: projectDetailData } = useQuery<IProjectDetailProps>(
    ["projectDetail", projectPk],
    getProjectDetail
  );

  const onForwardArrowClick = () => {
    if (photoNum + 1 === projectDetailData?.photo.length) {
      setPhotoNum(0);
    } else {
      setPhotoNum(photoNum + 1);
    }
  };

  const onBackwardArrowClick = () => {
    if (photoNum === 0) {
      projectDetailData
        ? setPhotoNum(projectDetailData.photo.length - 1)
        : setPhotoNum(0);
    } else {
      setPhotoNum(photoNum - 1);
    }
  };

  const onSmallImageClick = (prop: IInformPhotoProps) => {
    console.log(prop.pk);
  };

  return (
    <Box>
      <Navbar />
      {projectDetailData ? (
        <ProjectBox>
          <ProjectTitle>{projectDetailData.name}</ProjectTitle>
          <p>{projectDetailData.location} </p>
          {projectDetailData.photo[photoNum].file ? (
            photoClick === true ? (
              <MainImage
                src={projectDetailData.photo[photoNum].file}
                alt="..."
              />
            ) : (
              <PhotoOverlay></PhotoOverlay>
            )
          ) : photoClick === true ? (
            <MainImage
              src={projectDetailData.photo[photoNum].urlfile}
              alt="..."
              onClick={onPhotoClick}
            />
          ) : (
            <>
              <MainImage
                src={projectDetailData.photo[photoNum].urlfile}
                alt="..."
                onClick={onPhotoClick}
              />
              <PhotoOverlay onClick={onPhotoClick}>
                <OverlayPhoto
                  src={projectDetailData.photo[photoNum].urlfile}
                  alt="..."
                  onClick={onPhotoClick}
                />
              </PhotoOverlay>
            </>
          )}
          <ArrowBox>
            <div style={{ cursor: "pointer" }} onClick={onBackwardArrowClick}>
              <ArrowBackIcon />
            </div>

            <div style={{ cursor: "pointer" }} onClick={onForwardArrowClick}>
              <ArrowForwardIcon />
            </div>
          </ArrowBox>
          <SmallImageBox>
            {projectDetailData.photo.map((prop) =>
              prop.urlfile ? (
                <SmallImage
                  key={prop.pk}
                  src={prop.urlfile}
                  alt="..."
                  onClick={() => onSmallImageClick(prop)}
                />
              ) : (
                <SmallImage key={prop.pk} src={prop.file} alt="..." />
              )
            )}
          </SmallImageBox>
          <DescriptBox>
            <Description>{projectDetailData.description}</Description>
            <StatusBox>
              <StatusSubject>Status</StatusSubject>
              <Status>{projectDetailData.status}</Status>
              <StatusSubject>Date</StatusSubject>
              <Status>{projectDetailData.year}</Status>
            </StatusBox>
          </DescriptBox>
        </ProjectBox>
      ) : null}
      <Footer />
    </Box>
  );
};

export default Projectdetail;
