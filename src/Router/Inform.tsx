import React from "react";
import Navbar from "../Component/Navbar";
import { useQuery } from "react-query";

import { getInforms } from "../api";
import styled from "styled-components";
import { IInformProps } from "../types";
import WidthPercentage from "../Responsive";
import Footer from "../Component/Footer";

const Box = styled.div`
  position: relative;
  padding-top: 13vh;
`;

const ImageBox = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px 24px 0px;
`;

const InformBox = styled.a`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  color: #ffffff;
  background-color: gray;
`;

const InformDate = styled.p`
  font-style: normal;
  font-weight: 350;
  font-size: 15px;
  line-height: 22px;
`;

const InformTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;

const Inform = () => {
  const { data } = useQuery<IInformProps[]>(["informs"], getInforms);

  return (
    <Box>
      <Navbar />
      <ImageBox>
        {data?.map((inform) => (
          <InformBox href={inform.link} target="_blank" key={inform.pk}>
            {inform.photo[0].urlfile ? (
              <img src={inform.photo[0].urlfile} alt="..." />
            ) : (
              <img
                src={`http://localhost:8000/${inform.photo[0].file}`}
                alt="..."
              />
            )}
            <InformDate>{inform.date}</InformDate>
            <InformTitle>{inform.name}</InformTitle>
          </InformBox>
        ))}
      </ImageBox>

      <Footer />
    </Box>
  );
};

export default Inform;
