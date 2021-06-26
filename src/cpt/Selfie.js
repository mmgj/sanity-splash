import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { urlFor } from '../lib/sanity';
import { useStateValue } from '../lib/state';

const StyledPicture = styled.div`
  width: ${(p) => (p.variant === 0 ? p.diameter : p.diameter * 1.4)}px;
  height: ${(p) => p.diameter}px;
  margin: 5em auto;
  border-radius: ${(p) => (p.variant === 0 ? '50%' : '5px')};
  background-color: #eee;
  background-image: url(${(p) => p.imgsrc});
  background-size: cover;
  background-position: center;
  transition: transform 2s ease-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Selfie = ({ biggitude, variant, ...props }) => {
  const [
    {
      siteSettings: { heroImages },
    },
  ] = useStateValue();
  return (
    <StyledPicture
      alt='Mugshot'
      diameter={biggitude}
      variant={variant}
      imgsrc={urlFor(heroImages[variant]).width(500).url()}
      {...props}
    />
  );
};

Selfie.defaultProps = {
  biggitude: 400,
  variant: 0,
};

Selfie.propTypes = {
  biggitude: number,
  variant: number,
};

export default Selfie;
