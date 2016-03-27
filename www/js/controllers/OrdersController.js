var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService,UserService) {
	var self = this;

	self.orders;

	(function main(){
		var promise = OrderService.getOrder('56ecc5e178695f8030ca40eb');
		promise.then(function (response){
			if (response != undefined) {
				self.orders = response.data.result.data;
			}
		})
	})();
});