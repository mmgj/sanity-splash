import React from 'react';
import HeroType from '../cpt/HeroType';
import HeroImage from '../cpt/HeroImage';
import { number, string } from 'prop-types';

const Wrapper = ({ heroImage, heroType, children }) => {
  return (
    <>
      {heroImage !== null && (
        <HeroImage imageNode={heroImage}>
          {heroType && heroType.length > 0 && (
            <HeroType
              style={{
                textAlign: 'right',
                marginBottom: 20,
              }}
            >
              {heroType}
            </HeroType>
          )}
        </HeroImage>
      )}
      <main>{children}</main>
    </>
  );
};

Wrapper.defaultProps = {
  heroImage: null,
  heroType: '',
};

Wrapper.propTypes = {
  heroImage: number,
  heroType: string,
};

export default Wrapper;
