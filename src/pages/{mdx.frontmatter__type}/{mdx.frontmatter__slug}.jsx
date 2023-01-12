import * as React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import DefaultLayout from '../../templates/default';
import { formatDate } from '../../utils';
import { MDXProvider } from '@mdx-js/react';
import Image from '../../components/ui/Image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PageTemplate = ({ data, children }) => {
  const shortcodes = { Link, Image }; // Provide common components here
  const coverImage = data.mdx.frontmatter.coverImage
    ? data.mdx.frontmatter.coverImage.childrenImageSharp[0]
    : null;
  const coverImageAltText = data.mdx.frontmatter.coverImageAltText
    ? data.mdx.frontmatter.coverImageAltText
    : '';
  return (
    <DefaultLayout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      date={data.mdx.frontmatter.date}
    >
      {coverImage ? (
        <>
          <GatsbyImage image={getImage(coverImage)} alt={coverImageAltText} />
        </>
      ) : null}
      <article className="post">
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{formatDate(data.mdx.frontmatter.date)}</p>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </article>
    </DefaultLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      embeddedImagesRemote {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      frontmatter {
        title
        date
        excerpt
        slug
        coverImageAltText
        postImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        coverImage {
          childrenImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`;

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  data: PropTypes.object,
  pageContext: PropTypes.object,
  title: PropTypes.string,
};

export default PageTemplate;
