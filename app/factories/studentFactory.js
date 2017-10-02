'use strict';

app.factory('studentFactory', function ($q, $http, FBCreds, dataProcessing) {

	let url = FBCreds.databaseURL;
	let currentStudent = {};

	//gets single student object with student access code
	const getStudentObj = (accessCode) => {
		return $q((resolve, reject) => {
			$http.get(`${url}/students.json?orderBy="accessCode"&equalTo="${accessCode}"`)
				.then(item => {
					console.log("item from getStudentObj", item);
					if (angular.equals(item.data, {})) {
						resolve(item.data);
					} else {
						currentStudent = dataProcessing.addId(item.data);
						resolve(currentStudent);
					}
				})
				.catch(error => reject(error));
		});
	};

	const getCurrentStudent = () => {
		return currentStudent;
	};

	return {
		getStudentObj,
		getCurrentStudent
	};
});