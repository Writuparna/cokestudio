'use strict';


// Declare app level module which depends on filters, and services
angular.module('studioApp').config(['$urlRouterProvider','$stateProvider', '$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider){
		$stateProvider.state('home',{
			url : '/home',
			templateUrl : 'app/components/home/home.html',
			controller : 'HomeController',
		}).state('header',{
			template : '<main-header></main-header>',			
		}).state('history',{
			url: '/history',
			templateUrl : 'app/components/history/history.html',
			controller : 'HistoryController',
		});
		$urlRouterProvider.otherwise('home'); 
}]);