'use strict';

app.factory('edFactory', function ($http, $q, FBCreds) {

	//imports firebase url
	let url = FBCreds.databaseURL;

	//posts new roster object to rosters collection
	const postStudent = (student) => {
		let newStudent = angular.toJson(student);
		return $http.post(`${url}/students.json`, newStudent)
			.then(data => console.log("data from postRoster", data))
			.catch(error => console.log("error from postRoster", error.message));
	};

	return {
		postStudent
	};

});