var notificationModule = angular.module('notification', []);

notificationModule.controller("NotificationController", 
	function($ionicLoading, $scope, $stateParams, $cordovaToast, NotificationService, $state, notificacoess){
	var self = this;

	this.notifications = notificacoess;

	this.userId = $stateParams.id;

	$scope.voltar = function() {
	    $state.go("orders", {id: self.userId}); 
	};

	this.carregarNotifications = function(){
		$ionicLoading.show();
		var promise = NotificationService.getNotification(self.userId);
		promise.then(function (response){
			$ionicLoading.hide();
			if (response != undefined) {
				self.notifications = response.data.result.data;
				self.atualizaEstadoLido();
			}
		}, function (erro) {
			$ionicLoading.hide();
			$cordovaToast.showLongBottom("Não foi possível carregar as notificacoes.");
		});
	};

	this.atualizaEstadoLido = function() {
		if (self.notifications != undefined){
			for (var i = 0; i < self.notifications.length; i++) {
				self.notifications[i].delivered = true;
				NotificationService.updateNotification(self.notifications[i]._id, self.notifications[i]);
			};
		};
	};

	(function main(){
		self.carregarNotifications();
	})();
});