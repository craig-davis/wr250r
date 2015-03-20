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
		if(Meteor.isClient){ Session.set('pageTitle', false); }
		
		return this.render('siteIndex');
	}
	
});

// Contirubte Page route
Router.route('/contribute', {
	name : 'contribute.index',
	
	action : function(){
		if(Meteor.isClient){ Session.set('pageTitle', 'Contribute'); }
		
		return this.render('contributeIndex');
	}
	
});

