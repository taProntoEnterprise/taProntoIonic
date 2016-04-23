var personModule = angular.module('person', []);

personModule.controller('PersonController', function($scope, $http, $cordovaToast, $stateParams, $ionicLoading, PersonService, $ionicSideMenuDelegate) {
	var self = this;
	
	this.person = {user: $stateParams.id};
	
	this.editMode = false;
	
	$scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
	
	this.savePerson = function() {
		var headers = {"Content-Type": "application/json"};
		if (this.person.email === undefined || this.person.name === undefined
			|| this.person.name.trim() === '') {
			$cordovaToast.showLongBottom('Preencha todos os campos corretamente.');
			return;
		}
		$ionicLoading.show();
		$http({
			method: self.editMode ? 'PUT':'POST',
			url: 'https://tapronto1.herokuapp.com/person/?userId=' + self.person.user,
			headers: headers,
			data: self.person
		}).then(function(){
			$ionicLoading.hide();
		    $cordovaToast.showLongBottom('Perfil atualizado com sucesso.');
			if (!self.editMode) {
				window.location.href="#/orders/" + $stateParams.id;
				location.reload();
			}
		}, function(info) {
			$ionicLoading.hide();
			console.log(info);
			$cordovaToast.showLongBottom('Erro ao salvar usuário.');
		});
	};
	
	this.goToOrders = function() {
		window.location.href="#/orders/" + $stateParams.id;
		location.reload();
	};
	
	this.shouldLeftSideMenuBeEnabled = function() {
		return self.editMode;
	};
	
	(function main(){
		$ionicLoading.show();
		var promise = PersonService.getPerson($stateParams.id);
		promise.then(function (response){
			$ionicLoading.hide();
			self.editMode = true;
			var person = response.data.result;
			if (person === null) {
				self.editMode = false;
			} else {
				self.person.name = person.name;
				self.person.email = person.email;
			}
		}, function(info) {
			if (info.status === 404) {
				self.editMode = false;
			}
			$ionicLoading.hide();
		});
	})();
});