const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
