import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 5em;
  margin: 2% 5%;
  text-align: left;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  line-height: 1.2em;
  padding: 0.2em 0.5em;
  @media (max-width: 768px) {
    font-size: 4em;
  }
  @media (max-width: 592px) {
    font-size: 2.5em;
  }
`;

const HeroType = ({ children, ...props }) => {
  return (
    <StyledHeading className='heroes' {...props}>
      {children}
    </StyledHeading>
  );
};

export default HeroType;
