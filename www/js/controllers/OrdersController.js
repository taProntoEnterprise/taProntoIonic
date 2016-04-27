var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService,UserService, $ionicLoading, $stateParams, $state, $ionicSideMenuDelegate, NotificationService) {
	var self = this;

	this.userId = $stateParams.id;
	
	self.orders;

	self.notifications;

	this.hasNotification = false;

	this.carregarOrders = function(){
		$ionicLoading.show();
		var promise = OrderService.getOrder(self.userId);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.orders = response.data.result.data;
			}
		}, function (erro) {
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Não foi possível carregar os seus pedidos.");
		});
	};

	this.carregarNotifications = function(){
		$ionicLoading.show();
		var promise = NotificationService.getNotification(self.userId);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.notifications = response.data.result.data;
				if (self.notifications.length > 0) {
					self.hasNotification = true;
				};
			}
		}, function (erro) {
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Não foi possível carregar as notificacoes.");
		});
	};

	$scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

	$scope.logout = function () {
		$state.go("home");
	};

	$scope.getNotifications =  function() {
		$scope.changeState("notification");
	};

	$scope.populan =  function() {
		var nots = {};
		nots.order = "571fd861ff7f11c9224b9a6e";
		nots.notifier = "56fb2da2fd6394332e003eee";
		nots.notified = "571ec40d29c2dd41218a4388";
		nots.message = "taPronto";

		$ionicLoading.show();
		var promise = NotificationService.addOrder(nots);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.carregarNotifications();
			}
		}, function (erro) {
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Não foi possível salvar as notificacoes.");
		});
	};

	$scope.changeState = function(state){
		$state.go(state);
	};

	(function main(){
		self.carregarOrders();
		self.carregarNotifications()
	})();
});