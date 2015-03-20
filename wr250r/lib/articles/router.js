Router.route('/articles', function(){
	if(Meteor.isClient){ Session.set('pageTitle', 'Articles'); }
	
	return this.render('articlesIndex');
	
},{
	name : 'article.index'
});

Router.route('/articles/:article', function(){
	var article = this.params.article;
	
	if(Meteor.isClient){
		Session.set('pageTitle', Articles.findOne({ url : article }).title);
	}
	
	this.layout('articleBase');
	
	return this.render('article-' + article);
	
},{
	name : 'article'
});

