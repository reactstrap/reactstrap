module.exports = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.js'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  staticDirs: ['../static'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
