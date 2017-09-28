'use strict';

app.factory('edFactory', function ($http, $q, FBCreds) {

	//imports firebase url
	let url = FBCreds.databaseURL;

	//posts new roster object to rosters collection
	const postRoster = (roster) => {
		let newRoster = angular.toJson(roster);
		return $http.post(`${url}/rosters.json`, newRoster)
			.then(data => console.log("data from postRoster", data))
			.catch(error => console.log("error from postRoster", error.message));
	};

	return {
		postRoster
	};

});