module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader"
        }
      ]
    }
  }
};
