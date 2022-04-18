import * as React from 'react';
import { graphql } from 'gatsby';
import DefaultLayout from '../components/layout/default';
import StaticPageHeader from '../components/ui/StaticPageHeader';

const md = (data) => {
  const { html } = data.data.allMarkdownRemark.edges[0].node;
  return <div className="post" dangerouslySetInnerHTML={{ __html: html }} />;
};

const AboutPage = ({ data }) => {
  return (
    <>
      <DefaultLayout title="About me">
        <StaticPageHeader title="About me" />
        {md({ data })}
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default AboutPage;
