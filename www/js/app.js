// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'user', 'ngCordova','service','order', 'person','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  
  .state('servicos', {
    url: '/servicos',
    views: {
     servicos: {
        templateUrl: 'view/listagem.html'
      }
    }
  })  
    .state('home',{
      url:'/',
      views:{
        home:{
          templateUrl:'view/login.html'
        }
      }
    })
	
	.state('registerPerson',{
      url:'/registerPerson/:id',
      views:{
        home:{
          templateUrl:'view/registerPerson.html'
        }
      }
    })
	
    .state('register',{
      url:'/register',
      views:{
        register:{
          templateUrl:'view/register.html'
        }
      }
    })
    .state('order',{
      url:'/order/:id',
      views:{
        register:{
          templateUrl:'view/order.html'
        }
      }
    }) 
});
