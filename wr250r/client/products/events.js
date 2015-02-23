Template.product.events({
	
	'click a[data-action=bookmark]' : function(e){
		e.preventDefault();
		e.target.blur();
		
		var isBookmarked = Bookmarks.find({
			doc_id : $(e.target).attr('data-product')
		}).count();
	
		
		if(isBookmarked){
			Meteor.call('removeBookmark', {
				doc_id : $(e.target).attr('data-product')
			});
		}else{
			Meteor.call('addBookmark', {
				type : 'product',
				doc_id : $(e.target).attr('data-product')
			});
		}
		
	},
	
	'click a[rel=productImage]' : function(e){
		e.preventDefault();
	}
	
});

Template.product.rendered = function(){
	$('a[rel=productImage]').fancybox({
		padding : 0
	});
};

