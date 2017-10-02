'use strict';

app.factory('studentFactory', function ($q, $http, FBCreds, dataProcessing) {

	let url = FBCreds.databaseURL;

	//gets single student object with student access code
	const getStudentObj = (accessCode) => {
		console.log("url", `${url}/students.json?orderBy="accessCode"&equalTo="${accessCode}"`);
		return $q((resolve, reject) => {
			$http.get(`${url}/students.json?orderBy="accessCode"&equalTo="${accessCode}"`)
				.then(item => {
					resolve(dataProcessing.addId(item.data));
				})
				.catch(error => reject(error));
		});
	};

	return {
		getStudentObj
	};
});