Meteor.subscribe('articles');

Template.articlesIndex.helpers({
	
	articles : function(){
		var articles = Articles.find().fetch();
		
		_.each(articles, function(article){
			if(Bookmarks.find({ doc_id : article._id }).count()){
				article.bookmarked = true;
			}
		});
		
		return articles;
		
	}
	
});

Template.articleBase.helpers({
	
	articleDoc : function(){
		return Articles.findOne({
			url : Router.current().params.articleName
		});
	},
	
	bookmarked : function(){
		var thisArticle = Articles.findOne({ url : Router.current().params.articleName });
		if(!thisArticle){ return false; }
	
		return Bookmarks.find({
			doc_id : thisArticle._id
		}).count();
	
	}
	
});

