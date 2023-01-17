import * as React from 'react';
import PropTypes from 'prop-types';

// Photo Grid container
const PhotoGrid = ({ children, caption }) => {
  return (
    <>
      <div className="photo-grid">{children}</div>
      <p className="photo-grid__caption">{caption}</p>
    </>
  );
};

PhotoGrid.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
};

// Photo grid columns
const PhotoGridItem = ({ children, cols }) => {
  return (
    <div className={`photo-grid__item photo-grid__item--cols-${cols}`}>
      {children}
    </div>
  );
};

PhotoGridItem.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number,
};

PhotoGridItem.defaultProps = {
  cols: 12,
};

export { PhotoGrid, PhotoGridItem };
