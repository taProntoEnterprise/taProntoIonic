var orderModule = angular.module('order', []);

orderModule.controller('SingleOrderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService, $ionicLoading, $ionicHistory) {
	var self = this;

	self.order;

	 $scope.voltar = function() {
	    //$ionicHistory.goBack();
	    window.location.href="#/servicos";
		location.reload();
	  };

	(function main(){
		$ionicLoading.show();
		var promise = OrderService.getSingleOrder($stateParams.id);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.order = response.data.result.data;
			}
		}, function (erro) {
			$cordovaToast.showLongBottom("Não foi possível carregar o seu pedido.");
		});
	})();
});