var servicesModule = angular.module('service');

servicesModule.service("ProviderService", function($http) {

	var self = this;
	var BASE_URL = "https://tapronto1.herokuapp.com/"
	//var BASE_URL = "http://localhost:3000/";

	this.getProvider = function(userId) {
		var url = BASE_URL + "providers/" + userId;
		return $http.get(url, {});
	};
});