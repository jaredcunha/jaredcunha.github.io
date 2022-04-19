import * as React from 'react';

const StaticPageHeader = ({ title }) => {
  return (
    <header className="banner banner--blog">
      <div className="post">
        <h1 className="banner__heading">{title}</h1>
      </div>
    </header>
  );
};

export default StaticPageHeader;
