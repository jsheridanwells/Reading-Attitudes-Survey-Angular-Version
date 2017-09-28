'use strict';

app.controller('loginCtrl', function ($scope, $window, $location, userFactory) {

	// holds user email and password
	$scope.account = {};

	//registers new user, then logs in user
	$scope.register = () => {
		userFactory.registerUser($scope.account)
			.then(userData => $scope.login())
			.catch(error => console.log("error from register", error.message));
	};

	//logs in returning user
	$scope.login = () => {
		userFactory.loginUser($scope.account)
			.then(data => $window.location.href = '#!/ed-overview')
			.catch(error => console.log("error from login", error.message));
	};

	//logs out user
	$scope.logout = () => {
		userFactory.logoutUser()
			.then(() => $location.url('/'))
			.catch(error => console.log("error from logout", error.message));
	};

});