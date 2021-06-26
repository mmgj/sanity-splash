import React from 'react';
import { Box, Card } from '@sanity/ui';
import Wrapper from '../cpt/Wrapper';
import BlockContent from '../cpt/BlockContent';
import { useStateValue } from '../lib/state';

const CoverLetter = () => {
  const [
    {
      siteSettings: { coverLetter },
    },
  ] = useStateValue();

  return (
    <Card className='react-transition fade-in'>
      <Wrapper heroImage={2} heroType='Hello!'>
        <Box marginY={6} paddingY={6}>
          {coverLetter && <BlockContent blocks={coverLetter} />}
        </Box>
      </Wrapper>
    </Card>
  );
};

export default CoverLetter;
