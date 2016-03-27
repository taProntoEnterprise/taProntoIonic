var personModule = angular.module('person', []);

personModule.controller('PersonController', function($scope, $http, $cordovaToast, $stateParams) {
	var self = this;
	
	this.person = {user: $stateParams.id};
	
	this.savePerson = function() {
		var headers = {"Content-Type": "application/json"};
		$http({
			method: 'POST',
			url: 'https://tapronto1.herokuapp.com/person/?userId=' + self.person.user,
			headers: headers,
			data: self.person
		}).then(function(){
			$cordovaToast.showLongBottom('Perfil atualizado com sucesso.');
			window.location.href="#/servicos";
			location.reload();
		}, function(info) {
		  $cordovaToast.showLongBottom('Erro ao salvar usuário.');
		});
	};
});