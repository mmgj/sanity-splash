import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { urlFor } from '../lib/sanity';
import { useStateValue } from '../lib/state';

const StyledHero = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 5%;
  width: 100%;
  height: 500px;
  border-radius: 5px;
  color: white;
  background-color: #eee;
  background-image: url(${(p) => p.imgsrc});
  background-size: cover;
  background-position: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeroImage = ({ imageNode, children }) => {
  const [{ siteSettings }] = useStateValue();
  return (
    siteSettings &&
    imageNode !== null && (
      <StyledHero
        imgsrc={urlFor(siteSettings.heroImages[imageNode]).width(1200).url()}
      >
        {children}
      </StyledHero>
    )
  );
};

HeroImage.defaultProps = {
  imageNode: null,
};

HeroImage.propTypes = {
  imageNode: number,
};

export default HeroImage;
