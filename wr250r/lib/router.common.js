// pre-load the db on every request
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

// Homepage route
Router.route('/', {
	name : 'home',
	
	action : function(){
		return this.render('siteIndex');
	}
	
});

// Contirubte Page route
Router.route('/contribute', {
	name : 'contribute.index',
	
	action : function(){
		return this.render('contributeIndex');
	}
	
});

