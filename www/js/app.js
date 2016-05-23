angular.module('starter', ['ionic', 'user', 'ngCordova','service','order', 'person','ui.router', 'notification'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  
  .state('orders', {
    url: '/orders/:id',
    templateUrl: 'view/listagem.html' 
  })  
  .state('home',{
    url:'/',
    templateUrl:'view/login.html'   
  })
	
  .state('registerPerson',{
    url:'/registerPerson/:id',
    templateUrl:'view/registerPerson.html'
  })
	
  .state('register',{
    url:'/register',
    templateUrl:'view/register.html'
  })
  
  .state('order',{
    url:'/order/:id',
    templateUrl:'view/order.html'
  })
  
  .state('notification',{
    url:'/notification/:id',
    templateUrl:'view/notifications.html'
  })

  .state('bloqueados',{
    url:'/bloqueados/:id',
    templateUrl:'view/bloqueados.html'
  });

  $urlRouterProvider.otherwise('/');
});
