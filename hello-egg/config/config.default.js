'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532673369008_2794';

  // add your config here
  config.middleware = [];

  return config;
};
