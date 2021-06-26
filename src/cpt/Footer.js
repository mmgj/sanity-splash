import React from 'react';
import { Card, Flex, Text } from '@sanity/ui';

const Footer = () => {
  return (
    <Card
      padding={5}
      style={{
        width: '100vw',
        background: 'black',
      }}
    >
      <Flex justify='center' align='center'>
        <Text size={1} style={{ color: 'white', textAlign: 'center' }}>
          Made with ♥ & code
        </Text>
      </Flex>
    </Card>
  );
};

export default Footer;
