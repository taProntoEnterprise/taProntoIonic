var userModule = angular.module('user', []);

userModule.controller('UserController', function($scope, $http, $cordovaToast, UserService) {
	var self = this;
	var BASE_URL ="https://tapronto1.herokuapp.com/users/";
	
	this.user = {};
	
	this.saveUser = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: BASE_URL,
			headers: headers,
			data: self.user
	}).then(function(){
		$cordovaToast.showLongBottom('Usuário cadastrado com sucesso.');
	 	window.location.href="/"
	}, function(info) {
		$cordovaToast.showLongBottom('Erro ao salvar usuário.')});
	};

	this.login=function(){
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: BASE_URL+'login',
			headers: headers,
			data: this.user
		}).then(function(response){
			var user = response.data.result.data;
			UserService.setUser(user);
			if (user.person === undefined) {
				window.location.href="#/registerPerson/" + user._id;
			} else {
				window.location.href="#/servicos";
				location.reload();
			}
		}, function(response){
			$cordovaToast.showLongBottom('Usuário ou senha inválidos.');
		});	
	};
});
