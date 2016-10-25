'use strict';

describe('starter.controllers module', function() {

  beforeEach(module('starter.constants'));
  beforeEach(module('starter.services'));
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.directives'));
  beforeEach(module('starter.templates'));

  describe('Menu controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var userCtrl = $controller('menuController', {
        $scope: $scope
      });
      expect(userCtrl).toBeDefined();
    }));

  });
});