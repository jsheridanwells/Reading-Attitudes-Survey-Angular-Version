'use strict';

app.controller('resultsCtrl', function ($scope, $routeParams, edFactory) {

	$scope.student = {};

	const loadStudent = () => {
		edFactory.getSingleStudent($routeParams.studentId)
			.then(data => {
				$scope.student = data;
			})
			.catch(error => console.log("error from loadStudent", error));
	};

	loadStudent();

});