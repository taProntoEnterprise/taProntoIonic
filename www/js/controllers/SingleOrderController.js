var orderModule = angular.module('order', []);

orderModule.controller('SingleOrderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService, $ionicLoading, $ionicHistory, $state, PersonService) {
	var self = this;

	this.orderId = $stateParams.id;

	self.order;

	$scope.voltar = function() {
	    $state.go("orders"); 
	};
	
	this.bloquearFornecedor = function () {
		$ionicLoading.show();
		var promise = PersonService.bloquearFornecedor(self.order);
		promise.then(function(){
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Fornecedor bloqueado com sucesso!");
		});
	};

	$scope.$on("$ionicView.enter", function(event, data){
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
	});
	(function main(){
		$ionicLoading.show();
		console.log(self.orderId)
		var promise = OrderService.getSingleOrder(self.orderId);
		promise.then(function (response){
			$ionicLoading.hide();
			console.log("undefined");
			if (response != undefined) {
				console.log("oooooooooo")
				console.log(response.data.result.data);
				self.order = response.data.result.data;
			}
		}, function (erro) {
			$cordovaToast.showLongBottom("Não foi possível carregar o seu pedido.");
		});
	})();
});