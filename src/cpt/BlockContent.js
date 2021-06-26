import React from 'react';
import SanityBlocks from '@sanity/block-content-to-react';
import { array } from 'prop-types';

const serializers = {};

const BlockContent = ({ blocks, ...props }) => {
  return <SanityBlocks serializers={serializers} blocks={blocks} {...props} />;
};

BlockContent.propTypes = {
  blocks: array.isRequired,
};

export default BlockContent;
