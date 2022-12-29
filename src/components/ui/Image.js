import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ src, alt }) => {
  console.log(src);
  return (
    <>
      <p>Begin Image</p>
      <GatsbyImage image={getImage(src)} alt={alt} />
      <p>End Image</p>
    </>
  );
};

Image.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
};

export default Image;
