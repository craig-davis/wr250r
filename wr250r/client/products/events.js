Template.product.events({
	
	'click [data-action=bookmark]' : function(e){
		console.log($(e.target).attr('data-product'));
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

