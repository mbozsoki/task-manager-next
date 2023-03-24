module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", {
    name: "@storybook/addon-postcss",
    options: {
      cssLoaderOptions: {
        importLoaders: 1
      },
      postcssLoaderOptions: {
        implementation: require("postcss")
      }
    }
  }],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};