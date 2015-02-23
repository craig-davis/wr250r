Template.product.events({
	'click a[rel=productImage]' : function(e){
		e.preventDefault();
	}
});

Template.product.rendered = function(){
	$('a[rel=productImage]').fancybox({
		padding : 0
	});
};

