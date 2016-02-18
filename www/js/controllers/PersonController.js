var personModule = angular.module('person', []);

personModule.controller('PersonController', function($scope, $http) {
	var self = this;
	
	this.person = {};
	
	this.savePerson = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'http://localhost:3000/users/adduser',
			headers: headers,
			data: self.person
	}).then(function(){ alert('Usuário cadastrado com sucesso.');}, function(info) {alert('Erro ao cadastrar usuário.');});
	};
});