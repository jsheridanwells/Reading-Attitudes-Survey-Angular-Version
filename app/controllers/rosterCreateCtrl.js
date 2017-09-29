'use strict';

app.controller('rosterCreateCtrl', function ($scope, $location, codeGenerator, edFactory, userFactory) {

	//holds uid of current user
	let userId = userFactory.getUserId();

	//holds name of roster to assign to each student
	$scope.rosterName = '';

	//holds array of student names and access codes to print to DOM
	$scope.studentArr = [];

	//object template for new student information
	$scope.newStudent = {
		firstName: '',
		lastName: '',
		accessCode: '',
		rosterName: $scope.rosterName,
		uid: userId,
		id: ''
	};

	//organizes new student object with access code, adds to firebase collection, resets form
	$scope.addStudent = () => {
		let code = codeGenerator.createCode();
		$scope.newStudent.accessCode = code;
		edFactory.postStudent($scope.newStudent)
			.then(id => {
				$scope.newStudent.id = id.name;
				$scope.studentArr.push($scope.newStudent);
				resetNewStudent();
			})
			.catch(error => console.log("error from addStudent", error));
	};

	$scope.editStudent = () => {

	};

	//deletes student from students collection in Firebase
	$scope.deleteStudent = (id) => {
		edFactory.deleteStudent(id)
			.then(() => {
				removeStudent(id);
			})
			.catch(error => console.log("error from deleteStudent", error));
	};

	//clears newStudent form for next entry
	const resetNewStudent = () => {
		$scope.newStudent = {
			firstName: '',
			lastName: '',
			accessCode: '',
			responses: []
		};
	};

	//removes student from students array, called after deleteStudent
	const removeStudent = (id) => {
		$scope.studentArr.forEach(student => {
			if (id === student.id) {
				$scope.studentArr.splice($scope.studentArr.indexOf(student), 1);
			}
		});
	};

});