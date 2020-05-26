'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/user/list',controller.user.list);
  router.get('/Title1',controller.test.Title1);
  router.get('/Title2',controller.test.Title2);
};
