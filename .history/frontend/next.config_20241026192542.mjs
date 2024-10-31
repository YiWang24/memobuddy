// next.config.js

const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      // 解决 antd 样式加载问题
      config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  