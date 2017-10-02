'use strict';

app.controller('surveyCtrl', function ($scope, $location, studentFactory, surveyQuestions) {

	$scope.student = studentFactory.getCurrentStudent();
	$scope.count = 0;
	$scope.surveyQuestions = surveyQuestions;

	$scope.getNext = () => {
		if ($scope.count < $scope.surveyQuestions.length - 1) {
			$scope.count++;
		} else {
			$location.url('/#!');
		}
	};

	const loadTest = () => {
		console.log("$scope.student", $scope.student);
	};

	loadTest();

});