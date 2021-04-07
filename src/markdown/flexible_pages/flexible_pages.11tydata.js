module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      return `${( data.page.filePathStem.endsWith('/index') ? '' : '/{{page.fileSlug}}' )}/index.html`;
    },
  },
};
