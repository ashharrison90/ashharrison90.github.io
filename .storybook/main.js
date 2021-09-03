module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-root-attribute/register',
    'storybook-addon-next-router',
  ],
  core: {
    builder: 'webpack5',
  },
}
