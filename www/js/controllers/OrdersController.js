var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($interval, $scope, $http, $cordovaToast, OrderService,UserService, $ionicLoading, $stateParams, $state, $ionicSideMenuDelegate, NotificationService, PersonService) {
	var self = this;

	this.userId = $stateParams.id;
	
	self.orders;

	self.notifications;

	this.hasNotification = false;

	this.interval = 3000;

	this.pooling;

	this.person;

	this.carregarOrders = function(){
		var promise = OrderService.getOrder(self.userId);
		promise.then(function (response){
			if (response != undefined) {
				self.orders = response.data.result.data;
			}
			$ionicLoading.hide();
		});
	};

	this.carregarNotifications = function(){
		var personId = $stateParams.personId;
		var promise = NotificationService.getNotification(self.userId, {delivered:false});//self.userId);
		promise.then(function (response){
			if (response != undefined) {
				self.notifications = response.data.result.data;
				if (self.notifications.length > 0) {
					self.hasNotification = true;
				};
			}
		}, function (erro) {
		});
	};

	this.carregarPerson = function(){
		var promise = PersonService.getPerson(self.userId);
		promise.then(function(response){
			self.person = response.data.result.data;
			$ionicLoading.hide();
		});
	};

	this.carregar = function() {
		self.carregarNotifications();
  		self.carregarOrders();
	}

	$scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

	$scope.logout = function () {
		$state.go("home");
	};

	$scope.getNotifications =  function() {
		$scope.changeState("notification", {id: self.userId});
	};

	$scope.changeState = function(state, params){
		$ionicLoading.show();
		$state.go(state, params);
		location.reload();
		$ionicLoading.hide();
	};
	
	$scope.changeStatePerson = function(){
		$ionicLoading.show();
		window.location.href = "#/registerPerson/"+ self.userId;
		location.reload();
	};

	$scope.startPooling = function(){
        self.pooling = $interval(self.carregar, self.interval);
    };

    $scope.changeStateBlocke = function(){
        window.location.href = "#/bloqueados/"+ self.userId;
        location.reload();
    };

    $scope.$on("$ionicView.enter", function(event, data){
    	if (self.pooling == undefined){
    		$scope.startPooling();
    	}
		self.carregarNotifications();
  		self.carregarOrders();
	});

	(function main(){
		$ionicLoading.show();
		self.carregarNotifications();
  		self.carregarOrders();
  		self.carregarPerson()
	})();
});