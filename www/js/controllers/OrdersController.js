var servicesModule = angular.module('service', []);

servicesModule.controller('OrdersController', function ($scope, $http, $cordovaToast, OrderService) {
	var self = this;

	self.services = [
		{
			description: "Óticas Diniz - Reparo na armação", 
			client: "Pedro",
			status: "Confeccionando",
			creation_date: "12/02/2016"
		},
		{
			description: "Gato & Sapato - Personalização de sandália", 
			client: "Pericles",
			status: "Entregue",
			creation_date: "12/02/2016"
		},
		{
			description: "Gráfica Copiar - Confecção das comandas", 
			client: "Luana",
			status: "Pronto",
			creation_date: "12/02/2016"			
		},
		{
			description: "Laboratórios Bem Estar - Exame de sangue", 
			client: "Leticia",
			status: "Confeccionando",
			creation_date: "12/02/2016"
		}
	];

	(function main(){
		var promise = OrderService.getOrder("1gz2a4b");
		promise.then(function (response){
			if (response != undefined) {
				//self.services = response.result;
			}
		})
	})();
});