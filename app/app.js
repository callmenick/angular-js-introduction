(function() {

  'use strict';

  /**
   * angular
   * Description: Angular!
   */
  angular

  /**
   * app
   * Description: Sets up the initial state of the application
   */
  .module('app', [])

  /**
   * AppController
   * Description: Sets up a controller
   */
  .controller('AppController', ['$scope', function($scope) {
    
    /**
     * username
     * Description: The default username to attach to the scope
     */
    $scope.username = 'Nick';

    /**
     * changeUsername
     * Description: Updates the scope username
     */
    $scope.changeUsername = function(username) {
      $scope.username = username;
    };

    /**
     * usersArray
     * Description: A generic list of users, possibly pulled from a database, in
     * array notation.
     */
    $scope.usersArray = [
      ['BB', 'King'],
      ['Ray', 'Charles'],
      ['Muddy', 'Waters'],
      ['Lightnin', 'Hopkins'],
      ['Howlin', 'Wolf']
    ];

    /**
     * usersObject
     * Description: A generic list of users, possibly pulled from a database, in
     * object notation.
     */
    $scope.usersObject = [
      {
        firstname: 'BB',
        lastname: 'King'
      },
      {
        firstname: 'Ray',
        lastname: 'Charles'
      },
      {
        firstname: 'Muddy',
        lastname: 'Waters'
      },
      {
        firstname: 'Lightnin',
        lastname: 'Hopkins'
      },
      {
        firstname: 'Howlin',
        lastname: 'Wolf'
      }
    ];

    /**
     * randomUserModel
     * Description: Initializes the random user model username
     */
    $scope.randomUserModel = 'random user';

    /**
     * randomUserModelAlert
     * Description: Alerts the random username available from the ng model.
     */
    $scope.randomUserModelAlert = function() {
      alert($scope.randomUserModel);
    };

    /**
     * textClass
     * Description: A generic class name to attach to a string of text
     */
    $scope.textClass = '';

    /**
     * changeTextClass
     * Description: Changes the text class
     */
    $scope.changeTextClass = function(name) {
      $scope.textClass = name;
    }

  }]);

})();