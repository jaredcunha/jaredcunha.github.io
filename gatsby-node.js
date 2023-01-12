const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
   type Mdx implements Node {
     frontmatter: frontmatter
     embeddedImagesRemote: [File] @link(from: "fields.embeddedImagesRemote")
     coverImage: [File] @link(from: "fields.coverImage")
   }

   type frontmatter @dontInfer {
     title: String
     excerpt: String
     date: String
     slug: String
     type: String
     coverImageAltText: [String]
     embeddedImagesRemote: [String]
     coverImage: [String]
     postImages: [File] @fileByRelativePath
   }
 `);
};

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNodeField, createNode },
  cache,
  store,
}) => {
  // Embedded images
  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter &&
    node.frontmatter.embeddedImagesRemote
  ) {
    let embeddedImagesRemote = await Promise.all(
      node.frontmatter.embeddedImagesRemote.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          });
        } catch (error) {
          console.error(error);
        }
      })
    );
    if (embeddedImagesRemote) {
      createNodeField({
        node,
        name: 'embeddedImagesRemote',
        value: embeddedImagesRemote.map((image) => {
          return image.id;
        }),
      });
    }
  }

  // CoverImages
  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter &&
    node.frontmatter.coverImage
  ) {
    let coverImage = await Promise.all(
      node.frontmatter.coverImage.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          });
        } catch (error) {
          console.error(error);
        }
      })
    );
    if (coverImage) {
      createNodeField({
        node,
        name: 'coverImage',
        value: coverImage.map((image) => {
          return image.id;
        }),
      });
    }
  }
};
