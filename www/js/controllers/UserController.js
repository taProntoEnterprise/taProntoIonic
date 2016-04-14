var userModule = angular.module('user', ['ui.router']);

userModule.controller('UserController', function($scope, $http, $cordovaToast, UserService, $ionicLoading, $state) {
	var self = this;
	var BASE_URL ="https://tapronto1.herokuapp.com/users/";
	
	this.user = {};
	
	this.saveUser = function() {
		var headers = {"Content-Type": "application/json"};
		$ionicLoading.show();
		$http({
			method: 'POST',
			url: BASE_URL,
			headers: headers,
			data: self.user
	}).then(function(){
		$ionicLoading.hide();
		$cordovaToast.showLongBottom('Usuário cadastrado com sucesso.');
	 	window.location.href="#/";
	 	location.reload();
	}, function(info) {
		$ionicLoading.hide();
		$cordovaToast.showLongBottom("Usuário ou senha inválidos");
		});
	};

	this.login=function(){
		var headers = {"Content-Type": "application/json"};
		$ionicLoading.show();
		$http({
			method: 'POST',
			url: BASE_URL+'login',
			headers: headers,
			data: this.user
		}).then(function(response){
			var user = response.data.result.data;
			UserService.setUser(user);
			$ionicLoading.hide();
			if (user.person === undefined) {
				//$state.go("registerPerson", {id: user._id});
				window.location.href="#/registerPerson/" + user._id;
			} else {
				//$state.go("servicos", location="#/servicos", reload=true);
				window.location.href="#/servicos";
				location.reload();
			}
		}, function(response){
			$ionicLoading.hide();
			$cordovaToast.showLongBottom('Usuário ou senha inválidos.');
		});	
	};
	
	this.goToRegister = function() {
		window.location.href="#/register";
		location.reload();
	};

	$scope.cancelar = function () {
		window.location.href="#/";
		location.reload();
	}
});
