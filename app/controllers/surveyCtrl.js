'use strict';

app.controller('surveyCtrl', function ($scope, $location, studentFactory, surveyQuestions) {

	let imgValue = 0;
	let recCount = 0;
	let acadCount = 0;

	$scope.student = studentFactory.getCurrentStudent();
	$scope.count = 0;
	$scope.surveyQuestions = surveyQuestions;

	$scope.setSelected = ($event) => {
		let el = $event.target;
		resetImgBorders();
		$(el).attr('class', 'border-selected');
		imgValue = getImgValue($(el).attr('id'));
	};

	$scope.getNext = () => {
		resetImgBorders();
		if ($scope.count < $scope.surveyQuestions.length - 1) {
			$scope.count++;
			if ($scope.count <= 10) {
				recCount += imgValue;
			} else {
				acadCount += imgValue;
			}
			console.log("counts", $scope.count, recCount, acadCount);
		} else {
			$location.url('/');
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