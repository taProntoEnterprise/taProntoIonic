var userModule = angular.module('user');

userModule.factory("UserService",function() {
	var user = {};
	
	user.getLoggedUserId = function () {
		return user._id;
	};	

	user.setUser = function(newUser){
		user=newUser;
	};

	return user;
});