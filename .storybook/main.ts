import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-root-attribute/register',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-postcss',
  ],
  core: {},
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module?.rules?.find(
      (rule) =>
        typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
    )
    if (imageRule && typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default config
