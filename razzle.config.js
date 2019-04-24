'use strict';

module.exports = {
  plugins: ['typescript'],
  modify: (config, { target }) => {
    // https://github.com/jaredpalmer/razzle/issues/412#issuecomment-347760191
    // Fixes static assets path (required svgs, images, etc) for SSR
    if (target === 'node') {
      config.output.publicPath = `${process.env.PUBLIC_PATH}`
    }
    return config
  }
};
