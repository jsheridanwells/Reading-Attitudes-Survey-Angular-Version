'use strict';

app.controller('studentLoginCtrl', function ($location, $scope, $rootScope, $routeParams, studentFactory) {

	$scope.accessError = false;
	$rootScope.student = {};

	$scope.studentLogin = () => {
		studentFactory.getStudentObj($scope.accessCode)
			.then((data) => {
				if (angular.equals(data, {})) {
					$scope.accessError = true;
				} else {
					$routeParams.studentId = data.id;
					$rootScope.student = data;
					console.log("$rootScope.student", $rootScope.student);
					$location.url('survey/' + $routeParams.studentId);
				}
			})
			.catch(error => console.log("error from studentLogin", error));
	};

});