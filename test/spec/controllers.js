'use strict';

describe('Controller: FriendsCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('HsaCalculator'));

  var FriendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FriendsCtrl = $controller('FriendsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of friends to the scope', function () {
    scope.friends.should.have.length(4);
  });

});
