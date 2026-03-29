const ejsPlugin = require("@11ty/eleventy-plugin-ejs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(ejsPlugin);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/Videos");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/ionicons");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};