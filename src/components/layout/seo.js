import * as React from 'react';
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <body className={bodyClass} />
      {image && <meta name="image" content={image} />}
      <link rel="stylesheet" href="https://use.typekit.net/jcv8cla.css"></link>
      {/* add facebook and twitter stuff */}
    </Helmet>
  );
};

export default Seo;
