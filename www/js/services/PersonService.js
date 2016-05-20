var servicesModule = angular.module('service');

servicesModule.service("PersonService", function($http) {

	var self = this;
	var BASE_URL = "https://tapronto1.herokuapp.com/person"
	//var BASE_URL = "http://localhost:3000/person"

	this.getPerson = function(userId) {
		var url = BASE_URL + "/?userId=" + userId;
		return $http.get(url, {});
	};
	
	this.atualizaPerson = function(idProvider) {
		var url = BASE_URL + "/block/" + idProvider
	}
	
	this.bloquearFornecedor = function(order){
		var url = BASE_URL + "/block/" + order.provider + "?userId=" + order.client;
		return $http.put(url, {});
	};
	
});