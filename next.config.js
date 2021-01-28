const basePath = process.env.NODE_ENV === 'production' ? '/my_portfolio' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};