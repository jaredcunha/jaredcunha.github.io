module.exports = function(eleventyConfig) {

  // Watch targets
  eleventyConfig.addWatchTarget("_src/css");

  // Pass throughs
  eleventyConfig.addPassthroughCopy("_src/images");
  eleventyConfig.addPassthroughCopy("_src/css");



  //Layouts
  eleventyConfig.addLayoutAlias('landing', 'layouts/landing.njk');

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "./_src",      // Equivalent to Jekyll's source property
      output: "./_site" // Equivalent to Jekyll's destination property
    }
  };
};