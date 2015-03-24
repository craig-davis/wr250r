Router.route('/articles', {
	name : 'article.index',
	
	action : function(){
		if(Meteor.isClient){
			Session.set('pageTitle', 'Articles');
		}
		
		return this.render('articlesIndex');
	}
	
});

Router.route('/articles/draft', {
	name : 'article.draft',
	
	action : function(){
		
		if(Meteor.isClient){
			Session.set('pageTitle', 'Article Draft');
		}
		
		this.layout('articleDraftBase');
		
		return this.render('articleDraft', {
			article : null
		});
	}
	
});

Router.route('/articles/:article', {
	name : 'article',
	
	action : function(){
		var article = this.params.article;
		var articleDoc = Articles.findOne({ url : article });
		
		// Article Not Found
		if(!articleDoc){
			return this.render(Router.lookupNotFoundTemplate());
		}
		
		if(Meteor.isClient){
			Session.set('pageTitle', articleDoc.title);
		}
		
		return this.render('article', {
			article : articleDoc
		});
	}
	
});

