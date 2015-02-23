Template.product.events({
	
	'click .image-thumb' : function(e){
		e.preventDefault();
		
		var clickedLink = $(e.target).attr('data-image');
		
		// Grab this product
		var thisProduct = Products.findOne({ url : Router.current().params.product });
		
		// Create a reordered image list, started with the clicked image
		var clickedImageIndex = _.indexOf(thisProduct.images, clickedLink);
		var sortedImageList = newArrayFront(thisProduct.images, clickedImageIndex);
		
		// Build images list for this product
		var imageList = [];
		_.each(sortedImageList, function(imageUrl){
			imageList.push({
				href : '/images/products/' + imageUrl
			});
		});
		
		// Init fancybox
		$.fancybox.open(imageList, {
			padding : 0
		});
		
	}
	
});

