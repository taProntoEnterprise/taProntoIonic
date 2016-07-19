var servicesModule = angular.module('provider');

servicesModule.controller('ProvidersController', function ($interval, $scope, $http, $cordovaToast, OrderService,UserService, $ionicLoading, $stateParams, $state, $ionicSideMenuDelegate, NotificationService, PersonService) {
	var self = this;

	this.userId = $stateParams.id;
	
	this.voltar = function() {
	    $state.go("orders", {id: self.userId}); 
	};
});