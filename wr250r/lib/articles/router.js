Router.route('/articles', function(){
	
	return this.render('articlesIndex');
	
},{
	name : 'article.index'
});

Router.route('/articles/:articleName', function(){
	
	var articleName = this.params.articleName;
	
	this.layout('articleBase');
	
	return this.render('article-' + articleName);
	
},{
	name : 'article'
});

