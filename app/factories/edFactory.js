'use strict';

app.factory('edFactory', function ($http, $q, FBCreds) {

	//imports firebase url
	let url = FBCreds.databaseURL;

	const getAllStudents = (userId) => {
		return $q((resolve, reject) => {
			$http.get(`${url}/students.json?orderBy="uid"&equalTo="${userId}"`)
				.then(students => {
					console.log("students from getAllStudents", students);
					resolve(students.data);
				})
				.catch(error => reject(error));
		});
	};

	//posts new roster object to rosters collection
	const postStudent = (student) => {
		let newStudent = angular.toJson(student);
			return $http.post(`${url}/students.json`, newStudent)
				.then(response => {
					return response.data;
				})
				.catch(error => console.log("error from postStudent", error));
		};

	const editStudent = (id, obj) => {
		return $q((resolve, reject) => {
			let newObj = angular.toJson(obj);
			$http.patch(`${url}/students/${id}.json`, newObj)
				.then(data => resolve(data))
				.catch(error => reject(error));
		});
	};

	const deleteStudent = (id) => {
		return $q((resolve, reject) => {
			$http.delete(`${url}/students/${id}.json`)
				.then(response => resolve(response))
				.catch(error => reject(error));
		});
	};

	return {
		getAllStudents,
		postStudent,
		editStudent,
		deleteStudent
	};

});