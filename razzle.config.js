'use strict';

module.exports = {
  plugins: ['typescript', 'scss-with-modules'],
  modify: (config, { target }) => {
    // https://github.com/jaredpalmer/razzle/issues/412#issuecomment-347760191
    // Fixes static assets path (required svgs, images, etc) for SSR
    if (target === 'node' && process.env.NODE_ENV === 'production') {
      config.output.publicPath = `${process.env.PUBLIC_PATH}`
    }
    return config
  }
};
