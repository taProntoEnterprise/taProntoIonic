var servicesModule = angular.module('service', []);

servicesModule.controller('ServicosController', function ($scope, $http, $cordovaToast) {
	var self = this;

	self.services = [
		{
			generator: "Joao", 
			client: "Pedro",
			status: "Confeccionando",
			creation_date: "12/02/2016"
		},
		{
			generator: "Joana", 
			client: "Pericles",
			status: "Entregue",
			creation_date: "12/02/2016"
		},
		{
			generator: "Carlos", 
			client: "Luana",
			status: "Pronto",
			creation_date: "12/02/2016"			
		},
		{
			generator: "Marcos", 
			client: "Leticia",
			status: "Confeccionando",
			creation_date: "12/02/2016"
		},
		{
			generator: "Luis", 
			client: "Junior",
			status: "Entregue",
			creation_date: "12/02/2016"

		},
		{
			generator: "Ricardo", 
			client: "Elisa",
			status: "Pronto",
			creation_date: "12/02/2016"
		}
	];
});