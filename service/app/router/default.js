'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  // 获取文章列表
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  // 根据ID获取文章详细信息
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  // 得到类别名称和编号
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  // 根据类别ID获得文章列表
  router.get('/default/getListById/:id', controller.default.home.getListById);
};
