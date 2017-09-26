'use strict';
let app = angular.module('readingAttitudes', ['ngRoute']);

const showNav = () => {
	
};



app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/splash.html',
	})
	.when('/student-login', {
		templateUrl: 'partials/student-login.html',
		controller: 'loginCtrl',
		// resolve: isAuth
	})
	.when('/ed-login', {
		templateUrl: 'partials/ed-login.html',
		controller: 'loginCtrl',
		// resolve: isAuth
	})
	.otherwise('/');
});

app.run(() => {

});