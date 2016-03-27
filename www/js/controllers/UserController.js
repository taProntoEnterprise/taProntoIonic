var userModule = angular.module('user', []);

userModule.controller('UserController', function($scope, $http, $cordovaToast,UserService) {
	var self = this;
	var BASE_URL ="http://localhost:3000/users/";
	
	this.user = {};
	
	this.saveUser = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'http://localhost:3000/users/',
			headers: headers,
			data: self.user
	}).then(function(){
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
			window.location.href="#/servicos"
			location.reload();
			UserService.setUser(response.data.result.data);
		}, function(response){
			alert("Error trying to login");
		});	
	};
});