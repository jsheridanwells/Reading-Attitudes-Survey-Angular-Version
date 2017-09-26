'use strict';
let app = angular.module('readingAttitudes', ['ngRoute']);

const showNav = () => {
	
};

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		// controller: 'userCtrl'
	});
});

app.run(() => {

});