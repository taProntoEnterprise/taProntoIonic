var userModule = angular.module('user', []);

userModule.controller('UserController', function($scope, $http, $cordovaToast) {
	var self = this;
	
	this.user = {};
	
	this.saveUser = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'http://localhost:3000/users/adduser',
			headers: headers,
			data: self.user
	}).then(function(){ alert('Usuário cadastrado com sucesso.');}, function(info) {$cordovaToast.showLongBottom('Erro ao salvar usuário.')});
	};
});