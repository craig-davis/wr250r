Template.articleBase.events({
	
	'click a[data-action=bookmark]' : function(e){
		e.preventDefault();
		e.target.blur();
		
		var isBookmarked = Bookmarks.find({
			doc_id : $(e.target).attr('data-article')
		}).count();
	
		
		if(isBookmarked){
			Meteor.call('removeBookmark', {
				doc_id : $(e.target).attr('data-article')
			});
		}else{
			Meteor.call('addBookmark', {
				type : 'article',
				doc_id : $(e.target).attr('data-article')
			});
		}
		
	}
	
});

