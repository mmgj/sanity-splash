import React from 'react';
import { shape, array } from 'prop-types';
import { Stack, Card, Box, Flex, Text, Heading } from '@sanity/ui';
import { useMediaQuery } from 'react-responsive';
import { FiPhone as PhoneIcon, FiMail as MailIcon } from 'react-icons/fi';

import { urlFor } from '../lib/sanity';
import { formatDate, linkEmail, linkPhone } from '../lib/utils';

import Wrapper from '../cpt/Wrapper';
import BlockContent from '../cpt/BlockContent';
import PopoverLogo from '../cpt/PopoverLogo';

const contactIcons = {
  phone: <PhoneIcon />,
  email: <MailIcon />,
};

const Curriculum = ({ cv }) => {
  const { workExperience, additional, gridLogos, endNotes } = cv;
  const isBigScreen = useMediaQuery({ query: '(min-width: 787px)' });
  const isTinyScreen = useMediaQuery({ query: '(max-width: 380px)' });
  return (
    <Stack className='react-transition fade-in'>
      <Wrapper heroImage={1} heroType='Experience Points'>
        <Box marginY={5} paddingY={6}>
          <Heading muted size={4} style={{ textAlign: 'right' }}>
            Work Experience
          </Heading>
        </Box>
        {workExperience.map((item, index, arr) => (
          <Card
            key={item._key}
            paddingY={4}
            paddingBottom={5}
            borderTop={1}
            paddingX={isTinyScreen ? 1 : 4}
            borderBottom={index >= arr.length - 1 ? 1 : 0}
            style={{ background: index % 2 ? '#fff' : '#fafafa' }}
          >
            <Flex
              align='center'
              justify='space-between'
              direction={isTinyScreen ? 'column' : 'row'}
            >
              <Card
                style={{
                  borderRadius: 5,
                  overflow: 'hidden',
                  height: isBigScreen ? 200 : 120,
                  width: isBigScreen ? 200 : 120,
                  background: `url(${urlFor(item.logo).url()})`,
                  backgroundSize: 'cover',
                }}
              />

              <Stack>
                <Box paddingBottom={3} style={{ textAlign: 'right' }}>
                  <Text size={3}>{item.title}</Text>
                </Box>
                <Box>
                  <Text muted size={3} style={{ textAlign: 'right' }}>
                    {item.employer}
                  </Text>
                  <Flex marginTop={3} justify='flex-end' textAlign='right'>
                    <Text muted size={1}>
                      {item.startDate && formatDate(item.startDate)}
                      &nbsp;-&nbsp;
                      {item.endDate ? formatDate(item.endDate) : 'present'}
                    </Text>
                  </Flex>
                </Box>
                {item.reference && (
                  <>
                    <Box marginTop={5} marginBottom={3}>
                      <Text muted size={2} style={{ textAlign: 'right' }}>
                        Reference: {item?.reference?.referenceName}
                      </Text>
                    </Box>
                    <Box>
                      <Text muted size={1} style={{ textAlign: 'right' }}>
                        {item.reference.contact.map((item) => (
                          <Flex
                            key={item.value}
                            align='flex-end'
                            justify='flex-end'
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                position: 'relative',
                                bottom: -3,
                              }}
                            >
                              {contactIcons[item.medium.toLowerCase()]} &nbsp;
                            </span>
                            <span>
                              {item.medium.toLowerCase() === 'email'
                                ? linkEmail(item.value)
                                : item.medium.toLowerCase() === 'phone'
                                ? linkPhone(item.value)
                                : item.value}
                            </span>
                          </Flex>
                        ))}
                      </Text>
                    </Box>
                  </>
                )}
              </Stack>
            </Flex>
          </Card>
        ))}
        <Stack
          marginY={6}
          paddingBottom={2}
          paddingX={isTinyScreen ? 2 : 4}
          style={{ textAlign: 'center', fontSize: '1.2em' }}
        >
          <Card paddingY={3} style={{ color: '#444' }}>
            <BlockContent blocks={additional} />
          </Card>
          <Flex
            width='100%'
            justify={isTinyScreen ? 'space-around' : 'space-between'}
            marginTop={5}
            wrap='wrap'
            paddingBottom={4}
          >
            {gridLogos &&
              gridLogos.map((item, index, arr) => (
                <PopoverLogo
                  isTiny={isTinyScreen}
                  img={urlFor(item).url()}
                  txt={item.caption}
                  key={item._key}
                  position={
                    index === 0
                      ? 'top-end'
                      : index >= arr.length - 1
                      ? 'top-start'
                      : 'top'
                  }
                />
              ))}
          </Flex>

          <Card borderTop={1} marginY={6} paddingY={4}>
            {endNotes && (
              <Card paddingY={3} style={{ textAlign: 'left' }}>
                <BlockContent blocks={endNotes} />
              </Card>
            )}
          </Card>
        </Stack>
      </Wrapper>
    </Stack>
  );
};

Curriculum.propTypes = {
  cv: shape({
    workExperience: array,
    additional: array,
    gridLogos: array,
  }).isRequired,
};

export default Curriculum;
