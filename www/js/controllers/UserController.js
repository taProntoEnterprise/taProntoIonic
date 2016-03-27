var userModule = angular.module('user', []);

userModule.controller('UserController', function($scope, $http, $cordovaToast) {
	var self = this;
	
	this.user = {};
	
	this.saveUser = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'https://tapronto1.herokuapp.com/users',
			headers: headers,
			data: self.user
	}).then(function(){
	 	window.location.href="/";
	}, function(info) {
		$cordovaToast.showLongBottom('Erro ao salvar usuário.')
		});
	};

	this.login=function(){
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'https://tapronto1.herokuapp.com/users/login',
			headers: headers,
			data: self.user
		}).then(function(response){
			var user = response.data.result.data;
			console.log(user);
			console.log(user.person);
			if (user.person === undefined) {
				window.location.href="#/registerPerson/" + user._id;
			} else {
				window.location.href="#/servicos";
				location.reload();
			}
		}, function(response){
				alert("Error trying to login");
		});

	};
});