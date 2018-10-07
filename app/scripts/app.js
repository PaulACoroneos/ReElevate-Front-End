'use strict';

/**
 * @ngdoc overview
 * @name dsApp
 * @description
 * # dsApp
 *
 * Main module of the application.
 */
angular
  .module('dsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'main'
      })
      .state('orgSignUp', {
        url : '/orgSignUp',
        templateUrl: 'views/organization.html',
        controller: 'OrgSignUpCtrl',
        controllerAs: 'about'
      })
      .state('allVolunteer', {
        url : '/allVolunteer',
        templateUrl: 'views/volListAll.html',
        controller: 'VolListAllCtrl',
        controllerAs: 'about'
      }).state('future', {
        url : '/future',
        templateUrl: 'views/futureEvents.html',
        controller: 'futureEventsCrtl',
        controllerAs: 'about'
      }).state('past', {
        url : '/past',
        templateUrl: 'views/pastEvents.html',
        controller: 'pastEventsCrtl',
        controllerAs: 'about'
      })
      .state('active', {
        url : '/active',
        templateUrl: 'views/activeEvents.html',
        controller: 'activeEventsCrtl',
        controllerAs: 'about'
      })
      .state('mission', {
        url : '/mission',
        templateUrl: 'views/missionStatement.html',
        controller: 'missionStatementCrtl',
        controllerAs: 'about'
      })
      .state('listVolunteer', {
        url : '/listVolunteer',
        templateUrl: 'views/volList.html',
        controller: 'VolListCtrl',
        controllerAs: 'about'
      })
      .state('volSignUp', {
        url : '/volSignUp',
        templateUrl: 'views/volunteer.html',
        controller: 'volunteerCtrl',
        controllerAs: 'about'
      })
      .state('about', {
        url : '/about',
        templateUrl: 'views/organization.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).state("otherwise", {
      url : '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl',
      controllerAs: 'main'
      })
  });
