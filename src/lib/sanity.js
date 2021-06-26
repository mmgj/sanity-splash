/* eslint-disable no-undef */
import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = client({
  projectId: process.env.REACT_APP_SANITY_PROJECTID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
