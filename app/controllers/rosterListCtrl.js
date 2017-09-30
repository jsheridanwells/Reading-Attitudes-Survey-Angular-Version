'use strict';

app.controller('rosterListCtrl', function ($scope, edFactory, userFactory) {

	//gets uid of logged in user
	let userId = userFactory.getUserId();

	//list all of the students associated with current user
	const listAllStudents = () => {
		console.log("userId", userId);
		edFactory.getAllStudents(userId)
			.then(students => {
				console.log("students from listAllStudents", students);
			})
			.catch(error => console.log("error from listAllStudents", error));
	};

	listAllStudents();

});