module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src/images");

  return {
    dir: {
      input: "./_src",      // Equivalent to Jekyll's source property
      output: "./_site" // Equivalent to Jekyll's destination property
    }
  };
};