var orderModule = angular.module('order', []);

orderModule.controller('SingleOrderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService, $ionicLoading, $ionicHistory, $state) {
	var self = this;

	this.orderId = $stateParams.id;

	self.order;

	$scope.voltar = function() {
	    $state.go("orders"); 
	};

	(function main(){
		$ionicLoading.show();
		var promise = OrderService.getSingleOrder(self.orderId);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.order = response.data.result.data[0];
			}
		}, function (erro) {
			$cordovaToast.showLongBottom("Não foi possível carregar o seu pedido.");
		});
	})();
});