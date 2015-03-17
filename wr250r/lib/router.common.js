Router.configure({
	waitOn : function() {
		return [
			Meteor.subscribe('products'),
			Meteor.subscribe('articles')
		]
	}
});

Router.route('/', function(){
	return this.render('siteIndex');
},{
	name : 'home'
});

