module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
