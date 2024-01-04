import React from "react";
import Navbar from "../Component/Navbar";
import { useQuery } from "react-query";

import { getInforms } from "../api";
import styled from "styled-components";
import { IInformProps } from "../types";
import Footer from "../Component/Footer";

const Box = styled.div`
  position: relative;
  padding-top: 13vh;
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px 24px 0px;
  padding-bottom: 15vh;
`;

const InformBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  color: #ffffff;
  margin: 10px 0px 0px;
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

const InformBoxColum = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
const InformImage = styled.img`
  margin: 0;
  padding: 0;
  width: 31.5vw;
`;
const Inform = () => {
  const { data } = useQuery<IInformProps[]>(["informs"], getInforms);

  return (
    <Box>
      <Navbar />
      <ImageBox>
        <InformBoxColum>
          {data?.map((inform, id) => (
            <>
              {id % 3 === 0 ? (
                <InformBox href={inform.link} target="_blank" key={inform.pk}>
                  {inform.photo[0].urlfile ? (
                    <InformImage src={inform.photo[0].urlfile} alt="..." />
                  ) : (
                    <InformImage
                      src={`https://archinion.onrender.com/${inform.photo[0].file}`}
                      alt="..."
                    />
                  )}
                  <InformDate>{inform.date}</InformDate>
                  <InformTitle>{inform.name}</InformTitle>
                </InformBox>
              ) : null}
            </>
          ))}
        </InformBoxColum>
        <InformBoxColum>
          {data?.map((inform, id) => (
            <>
              {id % 3 === 1 ? (
                <InformBox href={inform.link} target="_blank" key={inform.pk}>
                  {inform.photo[0].urlfile ? (
                    <InformImage src={inform.photo[0].urlfile} alt="..." />
                  ) : (
                    <InformImage
                      src={`https://archinion.onrender.com/${inform.photo[0].file}`}
                      alt="..."
                    />
                  )}
                  <InformDate>{inform.date}</InformDate>
                  <InformTitle>{inform.name}</InformTitle>
                </InformBox>
              ) : null}
            </>
          ))}
        </InformBoxColum>
        <InformBoxColum>
          {data?.map((inform, id) => (
            <>
              {id % 3 === 2 ? (
                <InformBox href={inform.link} target="_blank" key={inform.pk}>
                  {inform.photo[0].urlfile ? (
                    <InformImage src={inform.photo[0].urlfile} alt="..." />
                  ) : (
                    <InformImage
                      src={`https://archinion.onrender.com/${inform.photo[0].file}`}
                      alt="..."
                    />
                  )}
                  <InformDate>{inform.date}</InformDate>
                  <InformTitle>{inform.name}</InformTitle>
                </InformBox>
              ) : null}
            </>
          ))}
        </InformBoxColum>
      </ImageBox>
      <Footer />
    </Box>
  );
};

export default Inform;
