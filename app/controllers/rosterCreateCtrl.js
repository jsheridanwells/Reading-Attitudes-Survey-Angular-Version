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
		rosterName: '',
		uid: userId,
		id: ''
	};

	//organizes new student object with access code, adds to firebase collection, resets form
	// $scope.addStudent = () => {
	// 	let code = codeGenerator.createCode();
	// 	$scope.newStudent.accessCode = code;
	// 	edFactory.postStudent($scope.newStudent)
	// 		.then(id => {
	// 			$scope.newStudent.id = id.name;
	// 			$scope.studentArr.push($scope.newStudent);
	// 			resetNewStudent();
	// 		})
	// 		.catch(error => console.log("error from addStudent", error));
	// };

	$scope.addStudent = () => {
		let code = codeGenerator.createCode();
		$scope.newStudent.rosterName = $scope.rosterName;
		$scope.newStudent.accessCode = code;
		$scope.studentArr.push($scope.newStudent);
		resetNewStudent();
	};

	//deletes student from students collection in Firebase
	$scope.deleteStudent = (id) => {
		edFactory.deleteStudent(id)
			.then(() => {
				removeItem(id, $scope.studentArr);
			})
			.catch(error => console.log("error from deleteStudent", error));
	};

	//posts each student in studentArr to firebase
	$scope.postAllStudents = () => {
		console.log("post all students firing");
		$scope.studentArr.forEach(student => {
			edFactory.postStudent(student)
				.then(data => {
					console.log("data from postAllStudents", data);
				})
				.catch(error => console.log("error from postAllStudents", error));
		});
	};

	//clears newStudent form for next entry
	const resetNewStudent = () => {
		$scope.newStudent = {
			firstName: '',
			lastName: '',
			accessCode: '',
			rosterName: '',
			uid: userId,
			id: ''
		};
	};

	//removes student from students array, called after deleteStudent
	const removeItem = (id, arr) => {
		arr.forEach(item => {
			if (id === item.id) {
				arr.splice(arr.indexOf(item), 1);
			}
		});
	};

});