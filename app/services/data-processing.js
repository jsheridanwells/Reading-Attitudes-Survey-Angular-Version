'use strict';

app.service('dataProcessing', function () {

	//with object downloaded from database, creates array with each object, assings id from FB uglyId
	this.makeArray = (obj) => {
		return Object.keys(obj).map(key => {
			obj[key].id = key;
			return obj[key];
		});
	};

	this.addId = (obj) => {
		obj[Object.keys(obj)[0]].id = Object.keys(obj)[0];
		return obj[Object.keys(obj)[0]];
	};


});