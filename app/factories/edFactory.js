'use strict';

app.factory('edFactory', function ($http, $q, FBCreds) {

	//imports firebase url
	let url = FBCreds.databaseURL;

	//posts new roster object to rosters collection
	const postStudent = (student) => {
		let newStudent = angular.toJson(student);
			return $http.post(`${url}/students.json`, newStudent)
				.then(response => {
					return response.data;
				})
				.catch(error => console.log("error from postStudent", error));
		};

	const editStudent = () => {

	};

	const deleteStudent = (id) => {
		return $q((resolve, reject) => {
			$http.delete(`${url}/students/${id}.json`)
				.then(response => resolve(response))
				.catch(error => reject(error));
		});
	};

	return {
		postStudent,
		editStudent,
		deleteStudent
	};

});