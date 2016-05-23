var userModule = angular.module('user', ['ui.router']);

userModule.controller('UserController', function($scope, $http, $cordovaToast, UserService, $ionicLoading, $state, PersonService) {
	var self = this;
	var BASE_URL ="https://tapronto1.herokuapp.com/users/";
	//var BASE_URL = "http://localhost:3000/users/";

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
	 	$state.go("home");
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
			console.log(user.person);
			if (user.person === undefined) {
				//$state.go("registerPerson", {id: user._id});
				window.location.href="#/registerPerson/" + user._id;
			} else {
				//$state.go("servicos", location="#/servicos", reload=true);
				window.location.href="#/orders/" + user._id;
				location.reload();
			}
		}, function(response){
			$ionicLoading.hide();
			$cordovaToast.showLongBottom('Usuário ou senha inválidos.');
		});	
	};
	
	this.goToRegister = function() {
		$state.go("register");

	};

	$scope.cancelar = function () {
		$state.go("home");
	}
});
