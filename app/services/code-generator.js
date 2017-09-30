'use strict';

app.service('codeGenerator', function () {

	//creates random 5-digit string for students to enter to access survey
	this.createCode = () => {
		let code = '';
		let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
		for (let i = 0; i < 5; i++) {
			code += chars[Math.ceil(Math.random() * chars.length - 1)];
		}
		return code;
	};
});