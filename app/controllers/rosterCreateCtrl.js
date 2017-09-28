'use strict';

app.controller('rosterCreateCtrl', function ($scope, $location, codeGenerator, edFactory, userFactory) {

	//holds uid of current user
	let userId = userFactory.getUserId();

	//holds array of student names and access codes to print to DOM
	$scope.studentArr = [];

	//object template for new student information
	$scope.newStudent = {
		firstName: '',
		lastName: '',
		accessCode: '',
		responses: []
	};

	//all new students get added to this object, posted to firebase rosters collection
	let roster = {
		uid: userId
	};

	//organizes new student object with access code, adds to rosters object, resets form
	$scope.addStudent = () => {
		let code = codeGenerator.createCode();
		$scope.newStudent.accessCode = code;
		roster[code] = $scope.newStudent;
		$scope.studentArr.push($scope.newStudent);
		resetNewStudent();
	};

	//assigns uid to roster object, posts to firebase rosters collection, redirects to ed-overview
	$scope.createRoster = () => {
		roster.uid = userId;
		edFactory.postRoster(roster)
			.then(() => {
				$location.url('/ed-overview');
			})
			.catch(error => console.log("error from createRoster", error.message));
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

});