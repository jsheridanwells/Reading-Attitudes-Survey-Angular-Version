'use strict';
app.controller('rosterCreateCtrl', function ($scope, $location, codeGenerator, edFactory) {

	$scope.studentArr = [];
	$scope.newStudent = {
		firstName: '',
		lastName: '',
		accessCode: ''
	};

	$scope.addStudent = () => {
		let student = $scope.newStudent;
		student.accessCode = codeGenerator.createCode();
		$scope.studentArr.push(student);
		resetNewStudent();
		console.log("$scope.studentArr", $scope.studentArr);
	};

	$scope.createRoster = () => {
		edFactory.postRoster($scope.studentArr)
			.then(() => {
				console.log("createRoster successful");
				$location.url('/ed-overview');
			})
			.catch(error => console.log("error from createRoster", error.message));
	};

	const resetNewStudent = () => {
			$scope.newStudent = {
			firstName: '',
			lastName: '',
			accessCode: ''
		};
	};

});