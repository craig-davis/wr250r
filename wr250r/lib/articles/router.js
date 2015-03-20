Router.route('/articles', function(){
	if(Meteor.isClient){ Session.set('pageTitle', 'Articles'); }
	
	return this.render('articlesIndex');
	
},{
	name : 'article.index'
});

Router.route('/articles/:articleName', function(){
	if(Meteor.isClient){
		Session.set('pageTitle', Articles.findOne({ name : articleName }).title);
	}
	
	var articleName = this.params.articleName;
	
	this.layout('articleBase');
	
	return this.render('article-' + articleName);
	
},{
	name : 'article'
});

