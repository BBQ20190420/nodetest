/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590463065329_3424';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const  mysql={
    clinet:{
      host:'127.0.0.1',
      port:'3306',
      user:'root',
      password:'123456',
      database:'bqqstudy'
    },
    app:true,
    agent:false,

  };

  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    },
  };



    return {
    mysql,
    ...config,
    ...userConfig,
  };
};
