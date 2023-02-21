import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4c4847;
  width: 100vw;
  height: 100vh;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  color: #ffffff;
`;
const NameBigText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 80px;
  letter-spacing: 0.3em;
`;

const NameSamllText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 43px;
  letter-spacing: 0.35em;
`;
const CircleBox = styled.div``;
const CircleBig = styled.div`
  position: absolute;
  left: 564.81px;
  top: 259px;
  width: 296.37px;
  height: 304px;
  border: 4px solid #e4e4e4;
  border-radius: 50%;
`;

const CircleMiddle = styled.div`
  position: absolute;
  width: 259px;
  height: 264.72px;
  left: 648px;
  top: 274.37px;
  border: 8px solid #818182;
  border-radius: 50%;
`;

const CircleSmall = styled.div`
  position: absolute;
  width: 210.98px;
  height: 215.19px;
  left: 533px;
  top: 337.56px;
  border-radius: 50%;
  border: 6px solid #908f90;
`;

const Home = () => {
  return (
    <Box>
      <CircleBox>
        <CircleBig />
        <CircleMiddle />
        <CircleSmall />
      </CircleBox>
      <TextBox>
        <NameBigText>ARCHINION</NameBigText>
        <NameSamllText>architecture-union</NameSamllText>
      </TextBox>
    </Box>
  );
};

export default Home;
