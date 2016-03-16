var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService) {
	var self = this;

	self.services;

	(function main(){
		var promise = OrderService.getOrder("56e809e842046b891eb6a125");
		promise.then(function (response){
			if (response != undefined) {
				console.log(response);
				console.log(response.data.result);

				self.services = [response.data.result];
				console.log(self.services);
			}
		})
	})();
});