import React from 'react';
import styled from 'styled-components';
import { string, number, node, oneOfType } from 'prop-types';
import { Box, Flex, Card, Text, Heading } from '@sanity/ui';
import { useMediaQuery } from 'react-responsive';

import { useStateValue } from '../lib/state';
import { formatDate, linkEmail, linkPhone } from '../lib/utils';

import Selfie from '../cpt/Selfie';
import Wrapper from '../cpt/Wrapper';
import BlockContent from '../cpt/BlockContent';
import { urlFor } from '../lib/sanity';

const StyledHR = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: 3em 0 3em 1.3em;
`;

const ItemLine = ({ label, value, index }) => (
  <Card
    className='react-transition'
    padding={2}
    style={{ background: index % 2 ? '#fff' : '#f2f2f2' }}
  >
    <Flex justify='space-between' align='center'>
      <Box marginY={2} paddingLeft={2}>
        <Text weight='medium'>{label}:</Text>
      </Box>
      <Box paddingY={2} paddingRight={2}>
        <Text style={{ whiteSpace: 'pre-wrap', textAlign: 'right' }}>
          {value}
        </Text>
      </Box>
    </Flex>
  </Card>
);

ItemLine.propTypes = {
  index: number.isRequired,
  label: string.isRequired,
  value: oneOfType([string, node]).isRequired,
};

const Personalia = () => {
  const [
    {
      personalia,
      siteSettings: { heroImages, about },
    },
  ] = useStateValue();
  const { name, birthDate, snailMail, phoneNumber, email, bio } = personalia;
  const isBigScreen = useMediaQuery({ query: '(min-width: 787px)' });
  return (
    <Box className='react-transition fade-in'>
      <Wrapper heroImage={null} heroType=''>
        <Flex
          justify='space-between'
          align='center'
          direction={isBigScreen ? 'row' : 'column-reverse'}
        >
          <Box
            paddingRight={isBigScreen ? 6 : 0}
            marginX={isBigScreen ? 5 : 0}
            flex={1}
            style={{ width: isBigScreen ? 'auto' : '100%' }}
          >
            <Box marginBottom={4}>
              <Heading size={3}>
                The Applicant <span style={{ color: '#ccc' }}>(him/he)</span>
              </Heading>
            </Box>
            {[
              ['Name', name],
              ['Date of birth', formatDate(birthDate, true)],
              ['Phone', linkPhone(phoneNumber)],
              ['Email', linkEmail(email)],
              ['Address', snailMail],
            ].map((tuple, index) => (
              <ItemLine
                key={tuple[0]}
                index={index}
                label={tuple[0]}
                value={tuple[1]}
              />
            ))}
          </Box>
          <Selfie biggitude={280} style={{ marginBottom: 50 }} />
        </Flex>
        <StyledHR />
        <Flex
          marginY={6}
          direction={isBigScreen ? 'reverse' : 'column-reverse'}
          align='center'
        >
          <Box
            style={{
              width: isBigScreen ? '50%' : '100%',
              padding: 0,
            }}
          >
            <div
              style={{
                borderRadius: 5,
                overflow: 'hidden',
                width: 400,
                margin: '3em auto',
                height: 250,
                padding: 0,
                boxShadow:
                  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
              }}
            >
              {/* TODO: Make this less hard-coded */}
              <img src={urlFor(heroImages[3]).width(400).url()} />
            </div>
          </Box>
          <Card paddingX={4} flex={2}>
            <BlockContent blocks={bio} />
          </Card>
        </Flex>
        <StyledHR />
        <Flex
          justify='space-between'
          align='center'
          direction={isBigScreen ? 'row' : 'column-reverse'}
        >
          <Box
            paddingRight={isBigScreen ? 6 : 0}
            marginX={isBigScreen ? 5 : 0}
            flex={1}
            style={{ width: isBigScreen ? 'auto' : '100%' }}
          >
            <Box marginBottom={4}>
              <Heading size={3}>
                The Application{' '}
                <span style={{ color: '#ccc' }}>(the tech)</span>
              </Heading>
            </Box>
            {[
              ['Backend', 'Sanity'],
              ['Front end', 'create-react-app'],
              ['Host', 'Vercel'],
              ['UI', 'Sanity'],
              ['Styling', 'styled-components (mostly)'],
            ].map((tuple, index) => (
              <ItemLine
                key={tuple[0]}
                index={index}
                label={tuple[0]}
                value={tuple[1]}
              />
            ))}
          </Box>
          <Selfie biggitude={280} style={{ marginBottom: 50 }} variant={4} />
        </Flex>
        <StyledHR />
        <Flex
          marginY={6}
          direction={isBigScreen ? 'reverse' : 'column-reverse'}
          align='center'
        >
          <Box
            style={{
              width: isBigScreen ? '50%' : '100%',
              padding: 0,
            }}
          >
            <div
              style={{
                borderRadius: 5,
                overflow: 'hidden',
                width: 400,
                margin: '3em auto',
                height: 250,
                padding: 0,
                boxShadow:
                  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
              }}
            >
              {/* TODO: Make this less hard-coded */}
              <img src={urlFor(heroImages[5]).width(400).url()} />
            </div>
          </Box>
          <Card paddingX={4} flex={2}>
            <BlockContent blocks={about} />
          </Card>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Personalia;
