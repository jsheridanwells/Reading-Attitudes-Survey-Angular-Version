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
		controller: 'studentLoginCtrl'
	})
	.when('/student-intro', {
		templateUrl: 'partials/student-intro.html',
		controller: 'surveyCtrl'
	})
	.when('/survey/:studentId', {
		templateUrl: 'partials/survey.html',
		controller: 'surveyCtrl'
	})
	.when('/exit-page', {
		templateUrl: 'partials/exit-page.html',
		controller: 'loginCtrl'
	})
	.when('/ed-login', {
		templateUrl: 'partials/ed-login.html',
		controller: 'loginCtrl'
	})
	.when('/ed-overview', {
		templateUrl: 'partials/ed-overview.html',
		controller: 'overviewCtrl',
		resolve: {isAuth}
	})
	.when('/roster-create', {
		templateUrl: 'partials/roster-create-view.html',
		controller: 'rosterCreateCtrl',
		resolve: {isAuth}
	})
	.when('/roster-list', {
		templateUrl: 'partials/roster-list-view.html',
		controller: 'rosterListCtrl',
		resolve: {isAuth}
	})
	.when('/results/:studentId', {
		templateUrl: 'partials/results.html',
		controller: 'resultsCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');
});

app.run((FBCreds) => firebase.initializeApp(FBCreds));