import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetaData {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUserName
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;
  const title = props.title
    ? `${props.title} – ${defaults.title}`
    : defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);
  const bodyClass = props.bodyClass || null;
  const twitterUserName = props.twitterUserName;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <body className={bodyClass} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterUserName} />

      <meta name="og:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta property="og:image" content={image} />
      <meta name="og:image:width" content="2400" />
      <meta name="og:image:height" content="1260" />
      <meta name="og:site_name" content={title} />
      <meta name="og:type" content="website" />
      <meta property="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta property="og:url" content={url} />

      <link rel="stylesheet" href="https://use.typekit.net/jcv8cla.css"></link>
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bodyClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  twitterUserName: PropTypes.string,
};

export default Seo;
