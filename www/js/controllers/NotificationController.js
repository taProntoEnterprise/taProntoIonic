var notificationModule = angular.module('notification', []);

notificationModule.controller("NotificationController", function($ionicLoading, $scope, $stateParams, $cordovaToast, NotificationService, $state){
	var self = this;

	this.notifications;

	this.userId = "571ec40d29c2dd41218a4388"; //$stateParams.id;

	$scope.voltar = function() {
	    $state.go("orders"); 
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