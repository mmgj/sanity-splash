import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { Card, Popover, Text } from '@sanity/ui';
import { urlFor } from '../lib/sanity';

const FadeInLogo = styled.div`
  overflow: hidden;
  height: 0;
  width: ${(p) => (p.isTinyScreen ? 35 : 16)}%;
  padding-top: ${(p) => (p.isTinyScreen ? 35 : 16)}%;
  background: url('${(p) => p.imgurl}');
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: 400ms opacity ease-out;
  &:hover {
    filter: none;
    opacity: 1;
  }
`;

const PopoverLogo = ({ img, txt, isTiny, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      content={
        <Card>
          <Text size={[1, 1, 2, 2]} style={{ whiteSpace: 'pre-wrap' }}>
            {txt}
          </Text>
        </Card>
      }
      padding={4}
      placement={position}
      open={isOpen}
    >
      <FadeInLogo
        isTinyScreen={isTiny}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        imgurl={urlFor(img).width(200).url()}
      />
    </Popover>
  );
};

PopoverLogo.defaultProps = {
  txt: '',
  isTiny: false,
  position: 'top',
};

PopoverLogo.propTypes = {
  img: string.isRequired,
  txt: string,
  isTiny: bool,
  position: string,
};

export default PopoverLogo;
