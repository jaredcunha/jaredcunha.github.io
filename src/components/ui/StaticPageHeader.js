import * as React from 'react';

const StaticPageHeader = ({ title }) => {
  return (
    <header class="banner banner--blog">
      <div class="post">
        <h1 class="banner__heading">{title}</h1>
      </div>
    </header>
  );
};

export default StaticPageHeader;
