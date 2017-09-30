'use strict';

app.controller('rosterListCtrl', function ($scope, edFactory, userFactory) {

	//gets uid of logged in user
	let userId = userFactory.getUserId();

	//holds students array
	$scope.students = [];

	//list all of the students associated with current user
	const listAllStudents = () => {
		console.log("userId", userId);
		edFactory.getAllStudents(userId)
			.then(students => {
				$scope.students = students;
				console.log("students from $scope.students", $scope.students);
			})
			.catch(error => console.log("error from listAllStudents", error));
	};

	//deletes student from students collection in Firebase
	$scope.deleteStudent = (id) => {
		edFactory.deleteStudent(id)
			.then(() => {
				listAllStudents();
			})
			.catch(error => console.log("error from deleteStudent", error));
	};

	listAllStudents();

});