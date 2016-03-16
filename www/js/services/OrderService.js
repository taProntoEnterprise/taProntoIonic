var servicesModule = angular.module('service');

servicesModule.service("OrderService", function($http) {

	var self = this;
	var BASE_URL = "http://localhost:3000/orders"

   /**
	* Retorna a lista de pedidos associadas ao id de usuario
	* passado como parametro.
	* 
	* @param id O id do usuario cujos pedidos serao retornados
	* @return A promise da requisiçao de GET.
	*
   */
	this.getOrder = function (id){
		var url = BASE_URL + "/orderByClient/:id"
		url = self.getURL(url, id);
		return $http.get(url, {});
	};

	/**
	* Adiciona um novo pedido
	*
	* @param order Pedido a ser salvo
	* @returns a promise da requisiçao de POST
	*/
	this.addOrder = function (order){
		var url = BASE_URL + "/addorder";
		return $http.post(url, order, {});
	}

	/**
	* Retorna a url base com o id passado por parametro
	*/
	this.getURL = function(url, id) {
		return url.replace(":id", id);
	};
});