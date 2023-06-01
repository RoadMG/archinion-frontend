import React from "react";
import Navbar from "../Component/Navbar";
import { useQuery } from "react-query";

import { getInforms } from "../api";
import styled from "styled-components";
import { IInformProps } from "../types";
import WidthPercentage from "../Responsive";

const Box = styled.div`
  position: absolute;
  top: 20vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 9px;
  margin: 0px 24px 0px 24px;
`;

const InformBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${WidthPercentage(457)};
  cursor: pointer;
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
  const { isLoading, data } = useQuery<IInformProps[]>(["informs"], getInforms);

  return (
    <>
      <Navbar />
      <Box>
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
      </Box>
    </>
  );
};

export default Inform;
