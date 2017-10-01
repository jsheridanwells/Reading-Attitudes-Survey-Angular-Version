'use strict';

app.controller('studentLoginCtrl', function ($location, $scope, $routeParams, studentFactory) {

	$scope.accessError = false;

	$scope.studentLogin = () => {
		studentFactory.getStudentObj($scope.accessCode)
			.then((data) => {
				console.log("studentLogin data", data);
				if (angular.equals(data, {})) {
					$scope.accessError = true;
				} else {
					$routeParams.studentId = data.id;
					$location.url('survey/' + $routeParams.studentId);
				}
			})
			.catch(error => console.log("error from studentLogin", error));
	};

});