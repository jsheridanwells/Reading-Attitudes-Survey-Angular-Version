'use strict';

app.controller('studentLoginCtrl', function ($location, $scope, studentFactory) {
	$scope.accessCode = '';

	$scope.studentLogin = () => {
		studentFactory.getStudentObj($scope.accessCode)
			.then((data) => {
				console.log("studentLogin data", data);
				// $location.url();
			})
			.catch(error => console.log("error from studentLogin", error));
	};

});