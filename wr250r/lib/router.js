Router.configure({
});

Router.route('/', {name : 'index'}, function(){
	return this.render('index');
});

Router.route('/articles', function(){
	
	return this.render('articlesIndex');
	
});

Router.route('/articles/:articleName', function(){
	
	var articleName = this.params.articleName;
	
	this.layout('articleBase');
	
	return this.render('article-' + articleName);
	
});

