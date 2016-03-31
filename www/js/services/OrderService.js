var servicesModule = angular.module('service');

servicesModule.service("OrderService", function($http) {

	var self = this;
	var BASE_URL = "https://tapronto1.herokuapp.com/orders"
	//var BASE_URL = "http://localhost:3000/orders"

   /**
	* Retorna a lista de pedidos associadas ao id de user
	* passado como parametro.
	* 
	* @param id O id da pessoa cujos pedidos serao retornados
	* @return A promise da requisiçao de GET.
	*
   */
	this.getOrder = function (userId){
		var url = BASE_URL + "?userId="+userId;
		return $http.get(url, {});
	};

	/**
	* Retorna o pedido associadas ao id
	* passado como parametro.
	* 
	* @param id O id do pedido
	* @return A promise da requisiçao de GET.
	*
   */
	this.getSingleOrder = function (orderId){
		var url = BASE_URL + "/" + orderId;
		return $http.get(url, {});
	};

	/**
	* Adiciona um novo pedido
	*
	* @param order Pedido a ser salvo
	* @returns a promise da requisiçao de POST
	*/
	this.addOrder = function (order){
		return $http.post(BASE_URL, order, {});
	}

	/**
	* Retorna a url base com o id passado por parametro
	*/
	this.getURL = function(url, id) {
		return url.replace(":id", id);
	};
});