const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

async function imageShortcode(src, alt, classNames) {
  let classes = classNames ? `class="${classNames}"` : "";
  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return `<img ${classes} src="https://images.jaredcunha.com/${src}" alt="${alt}" />`;
}

module.exports = function (eleventyConfig) {
  // Watch targets
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("src/css");

  //Images shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // Pass throughs
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  //Layouts
  eleventyConfig.addLayoutAlias("blog-index", "layouts/blog-index.njk");
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("landing", "layouts/landing.njk");
  eleventyConfig.addLayoutAlias("about", "layouts/about.njk");
  eleventyConfig.addLayoutAlias("contact", "layouts/contact.njk");

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Console things
  eleventyConfig.setQuietMode(true);

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "./src", // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property
    },
  };
};
