'use strict';
app.controller('rosterCreateCtrl', function ($scope, $location, codeGenerator, edFactory, userFactory) {

	//holds uid of current user
	let userId = userFactory.getUserId();

	// $scope.studentArr = [];
	$scope.newStudent = {
		firstName: '',
		lastName: '',
		responses: []
	};

	let roster = {};

	// $scope.addStudent = () => {
	// 	let student = $scope.newStudent;
	// 	student.accessCode = codeGenerator.createCode();
	// 	$scope.studentArr.push(student);
	// 	resetNewStudent();
	// 	console.log("$scope.studentArr", $scope.studentArr);
	// };

	$scope.addStudent = () => {
		let code = codeGenerator.createCode();
		roster[code] = $scope.newStudent;
		console.log("roster", roster);
	};

	$scope.createRoster = () => {
		roster.uid = userId;
		edFactory.postRoster(roster)
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