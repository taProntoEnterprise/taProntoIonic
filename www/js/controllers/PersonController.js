var personModule = angular.module('person', []);

personModule.controller('PersonController', function($scope, $http, $cordovaToast, $stateParams, $ionicLoading) {
	var self = this;
	
	this.person = {user: $stateParams.id};
	
	this.savePerson = function() {
		var headers = {"Content-Type": "application/json"};
		if (this.person.email === undefined || this.person.name === undefined
			|| this.person.name.trim() === '') {
			$cordovaToast.showLongBottom('Preencha todos os campos corretamente.');
			return;
		}
		$ionicLoading.show();
		$http({
			method: 'POST',
			url: 'https://tapronto1.herokuapp.com/person/?userId=' + self.person.user,
			headers: headers,
			data: self.person
		}).then(function(){
			$ionicLoading.hide();
		    $cordovaToast.showLongBottom('Perfil atualizado com sucesso.');
			window.location.href="#/servicos";
			location.reload();
		}, function(info) {
			$ionicLoading.hide();
			console.log(info);
			$cordovaToast.showLongBottom('Erro ao salvar usuário.');
		});
	};
});