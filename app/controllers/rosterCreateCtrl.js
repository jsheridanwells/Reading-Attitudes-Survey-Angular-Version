'use strict';
app.controller('rosterCreateCtrl', function ($scope, $window) {

	$scope.studentArr = [];
	$scope.newStudent = {
		firstName: '',
		lastName: '',
		accessCode: ''
	};

	$scope.addStudent = () => {
		let student = $scope.newStudent;
		$scope.studentArr.push(student);
		resetNewStudent();
		console.log("$scope.studentArr", $scope.studentArr);
	};

	const resetNewStudent = () => {
			$scope.newStudent = {
			firstName: '',
			lastName: '',
			accessCode: ''
		};
	};

});