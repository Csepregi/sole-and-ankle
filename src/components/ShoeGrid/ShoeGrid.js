import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const ShoeWrapper = styled.div`
  min-width: 270px;
  max-width: 270px;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 32px;
`;

export default ShoeGrid;
