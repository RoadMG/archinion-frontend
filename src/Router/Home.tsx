import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import WidthPercentage, {
  FontPercentage,
  HeightPercentage,
} from "../Responsive";
import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import Project from "./Project";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4c4847;
  width: 100vw;

  @media screen and (max-width: 700px) {
  }
`;
const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
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
const CircleBox = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 400px;
  @media screen and (max-width: 700px) {
    width: 50vw;
  }
`;

const textVariants = {
  normal: { opcacity: 0, y: -200 },
  onscreen: { opacity: 1 },
};

const Home = () => {
  const targetRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      console.log(window.innerHeight, window.scrollY);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Navbar />
      <CircleBox>
        <LogoImage
          src="https://imagedelivery.net/yvfURjmeP6k1KpJl18HyEQ/c1fa4229-9871-4ada-3c9f-e82fdad4e300/public"
          alt="..."
        />
        <TextBox initial="initial" variants={textVariants} animate="onscreen">
          <NameBigText>ARCHINION</NameBigText>
          <NameSamllText>architecture-union</NameSamllText>
        </TextBox>
      </CircleBox>

      <Project />
    </Box>
  );
};

export default Home;
