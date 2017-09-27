'use strict';
const app = angular.module('readingAttitudes', ['ngRoute']);

let isAuth = (userFactory) => new Promise ( (resolve, reject) => {
  userFactory.checkAuthenticated()
  .then( (userExists) => {
    if(userExists){
      resolve();
    }else {
      reject();
    }
  });
});

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/splash.html',
	})
	.when('/student-login', {
		templateUrl: 'partials/student-login.html',
		controller: 'loginCtrl'
	})
	.when('/ed-login', {
		templateUrl: 'partials/ed-login.html',
		controller: 'loginCtrl'
	})
	.when('/ed-overview', {
		templateUrl: 'partials/ed-overview.html',
		controller: 'overviewCtrl'
	})
	.when('/roster-create', {
		templateUrl: 'partials/roster-create-view.html',
		controller: 'rosterCreateCtrl'
	})
	.when('/roster-list', {
		templateUrl: 'partials/roster-list-view.html',
		controller: 'rosterListCtrl'
	})
	.otherwise('/');
});
app.run((FBCreds) => firebase.initializeApp(FBCreds));