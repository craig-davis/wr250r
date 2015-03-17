Router.configure({
	waitOn : function() {
		return [
			Meteor.subscribe('bookmarks'),
			Meteor.subscribe('products'),
			Meteor.subscribe('productCategories'),
			Meteor.subscribe('articles')
		]
	}
});

Router.route('/', function(){
	return this.render('siteIndex');
},{
	name : 'home'
});

