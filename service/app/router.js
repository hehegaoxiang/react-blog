'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 对router文件进行配置
  require('./router/default')(app);
};
