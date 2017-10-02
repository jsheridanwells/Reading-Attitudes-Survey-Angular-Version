'use strict';

app.controller('studentLoginCtrl', function ($location, $scope, studentFactory) {

	$scope.accessError = false;

	$scope.studentLogin = () => {
		studentFactory.getStudentObj($scope.accessCode)
			.then((data) => {
				if (angular.equals(data, {})) {
					$scope.accessError = true;
				} else {
					$location.url('/student-intro');
				}
			})
			.catch(error => console.log("error from studentLogin", error));
	};

});