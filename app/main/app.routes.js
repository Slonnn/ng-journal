(function (ng) {
	'use strict';
	ng.module('mApp.routes',['ngRoute'])
	.config(function($routeProvider) {
	  $routeProvider.
	    when('/', {
	      templateUrl: '/app/main/views/home.html',
	      controller : 'HomeCtrl'
	    }).
	    otherwise({
	      redirectTo: '/'
	    });
	});
})(angular)