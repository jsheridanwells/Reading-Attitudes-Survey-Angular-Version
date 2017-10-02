'use strict';

app.controller('surveyCtrl', function ($scope, $location, studentFactory, edFactory, surveyQuestions) {

	//loads data for current student
	$scope.student = studentFactory.getCurrentStudent();

	//loads survey questions
	$scope.surveyQuestions = surveyQuestions;

	//holds values of image selected, score for recreational reading, score for academic reading
	let imgValue = 0;
	let recCount = 0;
	let acadCount = 0;

	//increments each time response is submitted to change index of survey questions array
	$scope.count = 0;

	//each time image is selected by user, changes border of image, changes value of imgValue to selected value
	$scope.setSelected = ($event) => {
		let el = $event.target;
		resetImgBorders();
		$(el).attr('class', 'border-selected');
		imgValue = getImgValue($(el).attr('id'));
	};

	//when button is clicked, resets borders of images,
	//increases question count, stores value of selected image in acadCount or recCounts
	//depending on current question
	$scope.getNext = () => {
		resetImgBorders();
		if (imgValue !== 0) {
			if ($scope.count < $scope.surveyQuestions.length - 1) {
				$scope.count++;
				if ($scope.count <= 10) {
					recCount += imgValue;
				} else {
					acadCount += imgValue;
				}
			} else {
				$scope.student.recScore = Math.round((recCount / 40) * 100);
				$scope.student.acadScore = Math.round((acadCount / 40) * 100);
				$scope.student.composite = Math.round(((recCount + acadCount) / 80) * 100);
				console.log("$scope.student", $scope.student);
				edFactory.editStudent($scope.student.id, $scope.student)
					.then(response => $location.url('/exit-page'))
					.catch(error => console.log("error from getNext", error));
			}
		}
		imgValue = 0;
	};

	//resets all image borders to gray
	const resetImgBorders = () => {
		$('img').attr('class', 'garfield');
	};

	//returns integer for value of image selected based on id
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

});