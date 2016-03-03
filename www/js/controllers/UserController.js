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
	}).then(function(){
	 	window.location.href="/"
	}, function(info) {
		$cordovaToast.showLongBottom('Erro ao salvar usuário.')});
	};

	this.login=function(){
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'http://localhost:3000/users/login',
			headers: headers,
			data: self.user
		}).then(function(response){
			window.location.href="#/servicos"
			location.reload();
		}, function(response){
				alert("Error trying to login");
		});

	};
});