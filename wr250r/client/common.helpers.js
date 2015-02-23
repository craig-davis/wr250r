Template.navbar.helpers({
	currentRouteGroup : function(){
		if(Router.current() && Router.current().route){
			return Router.current().route.getName().split('.')[0];
		}
		return '';
	}
});

