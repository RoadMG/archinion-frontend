import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import styled from "styled-components";
import WidthPercentage, {
  FontPercentage,
  HeightPercentage,
} from "../Responsive";

const Box = styled.div`
  position: relative;
  padding-top: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: ${WidthPercentage(1392)};
  height: ${HeightPercentage(362)};
`;

const ContentText = styled.p`
  width: 674px;
  text-align: center;
  font-weight: 400;
  font-size: ${FontPercentage(15)};
  line-height: 21px;
  color: #a9a6a6;
  margin-top: 5vh;
  letter-spacing: 0.05em;
`;

const NameText = styled.h2`
  color: #a9a6a6;
  margin-top: 5vh;
  font-weight: 500;
  font-size: ${FontPercentage(25)};
  text-align: center;
`;

const CVText = styled.p`
  margin-top: 8vh;
  font-weight: 700;
  font-size: ${FontPercentage(15)};
  letter-spacing: 0.05em;
  text-decoration-line: underline;
  text-align: center;
  color: #a9a6a6;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15vh;
`;

const About = () => {
  return (
    <Box>
      <Navbar />
      <Image
        src={
          "https://imagedelivery.net/yvfURjmeP6k1KpJl18HyEQ/39856ff1-e769-4e2d-2a79-044f342ad100/public"
        }
        alt="..."
      />
      <ContentBox>
        <ContentText>
          아키니언(ARCHINION)은 건축(Architecture)과 연방(Union)을 합쳐서
          만들어진 단어입니다. 다양한 사람들 각자의 개성과 가치관을 존중하고,
          통섭된 방향으로 나아감을 추구하는 건축연방입니다.
          <br />
          <br />내 방에서 시작하여 동네를 지나치며 마주하는 건물, 동네, 도시,
          그리고 문화와 사회에 이르기까지 공간적, 문화적, 시대적 현안 을
          건축이라는 사고의 틀로 연구하는 방입니다. <br />
          <br />
          건축은 한 사람만의 힘으로 이루어 질 수 없습니다. 독단적이고 강압적인
          판단을 지양하고, 각 주체간 끝없는 수평적 소통으로 건축에 다가가려하려
          합니다.
          <br />
          <br /> 보편적 가치를 충족하고, 나아가 보편적 가치에 특별함을 줄 수
          있는 건축적 해결책을 제안하고자 합니다.
        </ContentText>
        <NameText>장영재</NameText>
        <CVText>Downloads ARCHINION CV</CVText>
      </ContentBox>

      <Footer />
    </Box>
  );
};

export default About;
