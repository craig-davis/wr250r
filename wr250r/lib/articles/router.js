Router.route('/articles', function(){
	
	return this.render('articlesIndex');
	
});

Router.route('/articles/:articleName', function(){
	
	var articleName = this.params.articleName;
	
	this.layout('articleBase');
	
	return this.render('article-' + articleName);
	
});

