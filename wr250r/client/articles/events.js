Template.articlesIndex.events({
	
	'change .categories-filter input' : function(e){
		
		// Get categories filter values
		var showCategories = [];
		$('.categories-filter input[type=checkbox]:checked').each(function(){
			showCategories.push($(this).attr('data-category'));
		});
		
		Session.set('articleCategoriesFilter', showCategories);
		
	}
	
});

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

