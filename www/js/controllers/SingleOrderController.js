var orderModule = angular.module('order', []);

orderModule.controller('SingleOrderController', function ($scope, $http, $cordovaToast,$stateParams, OrderService) {
	var self = this;

	self.order;

	(function main(){
		var promise = OrderService.getSingleOrder($stateParams.id);
		promise.then(function (response){
			if (response != undefined) {
				self.order = response.data.result;
			}
		})
	})();
});