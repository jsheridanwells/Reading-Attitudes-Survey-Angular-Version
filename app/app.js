'use strict';
let app = angular.module('readingAttitudes', ['ngRoute']);

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
	.otherwise('/');
});

app.run(() => {
	app.run((FBCreds) => firebase.initializeApp(FBCreds));
});