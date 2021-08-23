const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');

module.exports = withPWA(
  {
    pwa: {
      dest: 'public',
      sw: 'service-worker.js',
      publicExcludes: ['!locales', '!unused-locales', '!og', '!illustrations', '!svg'],
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.module.rules.unshift({
        test: /pdf\.worker\.(min\.)?js/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              publicPath: '_next/static/worker',
              outputPath: 'static/worker',
            },
          },
        ],
      });

      return config;
    },

    i18n,

  }
);
