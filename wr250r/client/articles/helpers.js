Meteor.subscribe('articles');

Template.articlesIndex.helpers({
	
	articles : function(){ return Articles.find(); }
	
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

