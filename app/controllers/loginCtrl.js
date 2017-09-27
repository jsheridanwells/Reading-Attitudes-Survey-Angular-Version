'use strict';

app.controller('loginCtrl', function ($scope, $location, userFactory) {

	$scope.account = {};

	$scope.register = () => {
		userFactory.registerUser($scope.account)
			.then(userData => $scope.login())
			.catch(error => console.log("error from register", error.message));
	};

	$scope.login = () => {
		userFactory.loginUser($scope.account)
			.then(data => $location.url('/'))
			.catch(error => console.log("error from login", error.message));
	};

	$scope.logout = () => {
		userFactory.logoutUser()
			.then(() => $location.url('/'))
			.catch(error => console.log("error from logout", error.message));
	};

});