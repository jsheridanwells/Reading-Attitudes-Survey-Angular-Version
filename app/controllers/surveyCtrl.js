'use strict';

app.controller('surveyCtrl', function ($scope, $rootScope, studentFactory) {

	$scope.student = studentFactory.getCurrentStudent();

	const loadTest = () => {
		console.log("$scope.student", $scope.student);
	};

	loadTest();

});