var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService,UserService, $ionicLoading, $stateParams) {
	var self = this;

	this.userId = $stateParams.id;
	
	self.orders;

	(function main(){
		$ionicLoading.show();
		console.log('olar');
		var promise = OrderService.getOrder('56e809e842046b891eb6a125');
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.orders = response.data.result.data;
			}
		}, function (erro) {
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Não foi possível carregar os seus pedidos.");
		});
	})();

	$scope.logout = function () {
		window.location.href="#/";
		location.reload();
	}
});