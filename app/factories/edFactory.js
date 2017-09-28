'use strict';
app.factory('edFactory', function ($http, $q, FBCreds) {

	let url = FBCreds.databaseURL;

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