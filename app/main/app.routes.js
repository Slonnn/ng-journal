(function (ng) {
	'use strict';
	ng.module('mApp.routes',['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/app/main/views/home.html',
				controller : 'HomeCtrl'
			})
            .when('/journal', {
                templateUrl: '/app/main/views/journal.html',
                controller : 'JournalCtrl',
                controllerAs : 'JournalCtrl'
            })
            .when('/portfolio', {
                templateUrl: '/app/main/views/portfolio.html',
                controller : 'PortfolioCtrl'
            })
            .when('/contact', {
                templateUrl: '/app/main/views/contact.html',
                controller : 'ContactCtrl'
            })
			.otherwise({
				redirectTo: '/'
			});
         $locationProvider.html5Mode(true);
	});
})(angular)