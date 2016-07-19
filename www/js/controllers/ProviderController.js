var orderModule = angular.module('provider', []);

orderModule.controller('ProviderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService, $ionicLoading, $ionicHistory, $state, PersonService) {
	var self = this;

	this.userId = $stateParams.userId;

	this.providerId = $stateParams.id;

	this.provider;

	this.getProvider = function(){
		var promise = PersonService.getProvider(self.providerId);
		promise.then(function(response){
			$ionicLoading.hide();
			self.provider = response.data.result.data;
		});
	};

	this.voltar = function() {
		$state.go("bloqueados", {id: self.userId});
	};

	this.getPhones = function() {
		if (this.provider !== undefined) {
			return this.provider.phones.join(', ');
		}
	};

	this.getEmails = function() {
		if (this.provider !== undefined) {
			return this.provider.emails.join(', ');
		}
	};

	(function main(){
		$ionicLoading.show();
		self.getProvider();
	})();
});