var orderModule = angular.module('order', []);

orderModule.controller('SingleOrderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService, $ionicLoading) {
	var self = this;

	self.order;

	(function main(){
		$ionicLoading.show();
		var promise = OrderService.getSingleOrder($stateParams.id);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.order = response.data.result;
			}
		})
	})();
});