Router.configure({
});

Router.route('/', {name : 'index'}, function(){
	return this.render('index');
});

Router.route('/docs', {name : 'docsIndex', routeGroup : 'docs'}, function(){
	return this.render('docsIndex');
});

