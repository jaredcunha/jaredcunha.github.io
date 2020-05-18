const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  // Watch targets
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("src/css");

  // Pass throughs
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  //Layouts
  eleventyConfig.addLayoutAlias('blog-index', 'layouts/blog-index.njk');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('landing', 'layouts/landing.njk');
    eleventyConfig.addLayoutAlias('about', 'layouts/about.njk');

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Console things
  eleventyConfig.setQuietMode(true);


  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "./src",      // Equivalent to Jekyll's source property
      output: "./_site" // Equivalent to Jekyll's destination property
    }
  };
};
