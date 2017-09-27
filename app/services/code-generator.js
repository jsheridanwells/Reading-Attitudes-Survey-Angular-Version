'use strict';
app.service('codeGenerator', function () {

	this.createCode = () => {
		let code = '';
		let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
		for (let i = 0; i < 5; i++) {
			code += chars[Math.ceil(Math.random() * chars.length - 1)];
		}
		return code;
	};
});