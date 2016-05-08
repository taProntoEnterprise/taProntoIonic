var servicesModule = angular.module('service');

servicesModule.service("NotificationService", function($http) {

	var self = this;
	var BASE_URL = "https://tapronto1.herokuapp.com/notifications"
	//var BASE_URL = "http://localhost:3000/notifications"

   /**
	* Retorna a lista de notificacoes associadas ao id de user
	* passado como parametro.
	* 
	* @param id O id da pessoa cujos notificacoes serao retornadas
	* @return A promise da requisiçao de GET.
	*
   */
	this.getNotification = function (userId){
		var url = BASE_URL + "?userId="+userId;
		return $http.get(url, {});
	};

	/**
	* Retorna a notificacao associadas ao id
	* passado como parametro.
	* 
	* @param id O id da notificaçao
	* @return A promise da requisiçao de GET.
	*
   */
	this.getSingleNotification = function (notificationId){
		var url = BASE_URL + "/" + notificationId;
		return $http.get(url, {});
	};

	/**
	* Atualiza a notificacao associadas ao id
	* passado como parametro.
	* 
	* @param id O id da notificaçao
	* @return A promise da requisiçao de PUT.
	*
   */
	this.updateNotification = function (notificationId, notification){
		var url = BASE_URL + "/" + notificationId;
		return $http.put(url, notification);
	};

	/**
	* Adiciona um novo pedido
	*
	* @param order Pedido a ser salvo
	* @returns a promise da requisiçao de POST
	*/
	this.addOrder = function (notification){
		return $http.post(BASE_URL + "/", notification, {});
	}

	/**
	* Retorna a url base com o id passado por parametro
	*/
	this.getURL = function(url, id) {
		return url.replace(":id", id);
	};
});