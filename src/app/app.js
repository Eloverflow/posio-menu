var posioMenuApp =  angular.module('starter', ['starter.templates', 'starter.controllers', 'starter.services', 'starter.constants','ui.bootstrap', 'ngIdle']);

posioMenuApp.config(function ($interpolateProvider, uibPaginationConfig, IdleProvider, KeepaliveProvider, $rootScopeProvider) {
  $interpolateProvider.startSymbol('<%');
  $interpolateProvider.endSymbol('%>');
  uibPaginationConfig.previousText = 'Précédent';
  uibPaginationConfig.nextText = 'Suivant';

  // configure Idle settings
  IdleProvider.idle(60); // in seconds
  IdleProvider.timeout(10); // in seconds
  KeepaliveProvider.interval(2); // in seconds
  IdleProvider.windowInterrupt('focus');


});


posioMenuApp.run(function (Idle) {
  // start watching when the app runs. also starts the Keepalive service by default.
  Idle.watch();
});
posioMenuApp.filter('floor', function () {
  return function (input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++)
      input.push(i);
    return input;
  };
});