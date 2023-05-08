import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import WidthPercentage, {
  FontPercentage,
  HeightPercentage,
} from "../Responsive";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4c4847;
  width: 100vw;
  height: 100vh;
`;
const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: ${HeightPercentage(700)};
  color: #ffffff;
`;
const NameBigText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${FontPercentage(55)};
  line-height: ${HeightPercentage(80)};
  letter-spacing: 0.3em;
`;

const NameSamllText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: ${FontPercentage(30)};
  line-height: ${HeightPercentage(43)};
  letter-spacing: 0.39em;
`;
const CircleBox = styled.div``;
const CircleBig = styled.div`
  position: absolute;
  left: ${WidthPercentage(564.81)};
  top: ${HeightPercentage(259)};
  width: 296.37px;
  height: 304px;
  border: ${FontPercentage(4)} solid #e4e4e4;
  border-radius: 50%;
`;

const CircleMiddle = styled.div`
  position: absolute;
  width: 259px;
  height: 264.72px;
  left: ${WidthPercentage(648)};
  top: ${HeightPercentage(274.37)};
  border: 8px solid #818182;
  border-radius: 50%;
`;

const CircleSmall = styled.div`
  position: absolute;
  width: 210.98px;
  height: 215.19px;
  left: ${WidthPercentage(533)};
  top: ${HeightPercentage(337.56)};
  border-radius: 50%;
  border: 6px solid #908f90;
`;

const textVariants = {
  normal: { opcacity: 0, y: -200 },
  onscreen: { opacity: 1 },
};

const Home = () => {
  return (
    <Box>
      <CircleBox>
        <CircleBig />
        <CircleMiddle />
        <CircleSmall />
      </CircleBox>
      <TextBox initial="initial" variants={textVariants} animate="onscreen">
        <NameBigText>ARCHINION</NameBigText>
        <NameSamllText>architecture-union</NameSamllText>
      </TextBox>
      <Navbar />
    </Box>
  );
};

export default Home;
