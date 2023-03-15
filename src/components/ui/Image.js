import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ src, alt, className, caption }) => {
  return (
    <figure className={className}>
      <GatsbyImage image={getImage(src)} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.object.isRequired,
};

export default Image;
