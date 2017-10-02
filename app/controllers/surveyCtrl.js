'use strict';

app.controller('surveyCtrl', function ($scope, $location, studentFactory, surveyQuestions) {

	$scope.student = studentFactory.getCurrentStudent();
	$scope.count = 0;
	$scope.surveyQuestions = surveyQuestions;

	$scope.setSelected = ($event) => {
		let el = $event.target;
		console.log("event", el);
		resetImgBorders();
		$(el).attr('class', 'border-selected');
	};

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

	const resetImgBorders = () => {
		$('img').attr('class', 'garfield');
	};

	loadTest();

});