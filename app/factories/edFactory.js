'use strict';

app.factory('edFactory', function ($http, $q, FBCreds, dataProcessing) {

	//imports firebase url
	let url = FBCreds.databaseURL;

	//returns array of all students associated with current user
	const getAllStudents = (userId) => {
		return $q((resolve, reject) => {
			$http.get(`${url}/students.json?orderBy="uid"&equalTo="${userId}"`)
				.then(students => {
					resolve(dataProcessing.makeArray(students.data));
				})
				.catch(error => reject(error));
		});
	};

	//returns single student object accessed by uglyId
	const getSingleStudent = (studentId) => {
		return $q((resolve, reject) =>{
			$http.get(`${url}/students/${studentId}.json`)
				.then(student => {
					resolve(dataProcessing.addId(student));
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
		getSingleStudent,
		postStudent,
		editStudent,
		deleteStudent
	};

});