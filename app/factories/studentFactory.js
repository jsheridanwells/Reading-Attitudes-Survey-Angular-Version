'use strict';

app.factory('studentFactory', function ($q, $http, FBCreds) {

	let url = FBCreds.databaseURL;

	const getStudentObj = (accessCode) => {
		console.log("url", `${url}/rosters.json?orderBy="accessCode"&equalTo="${accessCode}"`);
		return $q((resolve, reject) => {
			$http.get(`${url}/rosters.json?orderBy="accessCode"&equalTo="${accessCode}"`)
				.then(item => resolve(item.data))
				.catch(error => reject(error));
		});
	};


// $http.get(`${url}/items.json?orderBy="uid"&equalTo="${user}"`)

    // const getSingleTask = function(itemId){
    //     return $q((resolve,reject)=> {
    //         $http.get(`${url}/items/${itemId}.json`)
    //             .then(item => resolve(item.data))
    //             .catch(error => reject(error));
    //     });
    // };



	return {
		getStudentObj
	};
});