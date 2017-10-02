'use strict';

app.controller('surveyCtrl', function ($scope, $location, studentFactory, surveyQuestions) {

	$scope.student = studentFactory.getCurrentStudent();
	$scope.count = 0;
	$scope.surveyQuestions = surveyQuestions;

	let imgValue = 0;

	$scope.setSelected = ($event) => {
		let el = $event.target;
		resetImgBorders();
		$(el).attr('class', 'border-selected');
		imgValue = getImgValue($(el).attr('id'));
		console.log("imgValue", imgValue);

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

	const getImgValue = (value) => {
		if (value === 'one') {
			return 1;
		} else if (value === 'two') {
			return 2;
		} else if (value === 'three') {
			return 3;
		} else if (value === 'four') {
			return 4;
		}
	};

	loadTest();

});