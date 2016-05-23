var servicesModule = angular.module('service');

servicesModule.service("PersonService", function($http) {

	var self = this;
	var BASE_URL = "https://tapronto1.herokuapp.com/"
	//var BASE_URL = "http://localhost:3000/";

	this.getPerson = function(userId) {
		var url = BASE_URL + "person/" + userId;
		return $http.get(url, {});
	};

	this.getProvider = function(userId) {
		var url = BASE_URL + "providers/" + userId;
		return $http.get(url, {});
	};
	
	this.atualizaPerson = function(idProvider) {
		var url = BASE_URL + "person/block/" + idProvider
	}
	
	this.bloquearFornecedor = function(order){
		var url = BASE_URL + "person/block/" + order.provider + "?userId=" + order.client;
		return $http.put(url, {});
	};
	
});