'use strict';

app.controller('studentLoginCtrl', function ($location, $scope, $routeParams, studentFactory) {
	$scope.accessCode = '';
	$scope.accessError = false;

	$scope.studentLogin = () => {
		studentFactory.getStudentObj($scope.accessCode)
			.then((data) => {
				console.log("studentLogin data", data);
				$routeParams.accessCode = $scope.accessCode;
				if (angular.equals(data, {})) {
					$scope.accessError = true;
				} else {
					$location.url('survey/' + $routeParams.accessCode);
				}
			})
			.catch(error => console.log("error from studentLogin", error));
	};

});