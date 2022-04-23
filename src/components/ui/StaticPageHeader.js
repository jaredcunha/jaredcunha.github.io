import * as React from 'react';
import PropTypes from 'prop-types';

const StaticPageHeader = ({ title }) => {
  return (
    <header className="banner banner--blog">
      <div className="post">
        <h1 className="banner__heading">{title}</h1>
      </div>
    </header>
  );
};

StaticPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StaticPageHeader;
