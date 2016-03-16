var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService) {
	var self = this;

	self.orders;

	(function main(){
		var promise = OrderService.getOrder("56e809e842046b891eb6a125");
		promise.then(function (response){
			if (response != undefined) {
				self.orders = response.data.result;
			}
		})
	})();
});