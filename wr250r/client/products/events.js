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
			}, function(error, result){
				if(error && error.error == 'not-authorized'){
					alert('To bookmark items, please first log in or create a free account');
					return true;
				}
			});
		}
		
	},
	
	'click a[rel=productImage]' : function(e){
		e.preventDefault();
	}
	
});

Template.product.rendered = function(){
	
	// Enable fancybox for product images
	$('a[rel=productImage]').fancybox({
		padding : 0
	});
	
};

