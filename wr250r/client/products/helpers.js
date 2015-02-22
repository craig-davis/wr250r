Meteor.subscribe('products');
Meteor.subscribe('productCategories');

Template.productsIndex.helpers({
	
	categories : function(){
		return ProductCategories.find({}, {
			sort : { sort : 1 }
		});
	}
	
});

Template.productCategory.helpers({
	
	categoryDoc : function(){
		return ProductCategories.findOne({
			url : Router.current().params.category
		});
	},
	
	products : function(){
		return Products.find({
			category : Router.current().params.category
		});
	}
	
});

Template.product.helpers({
	
	categoryDoc : function(){
		return ProductCategories.findOne({
			url : Router.current().params.category
		});
	},
	
	productDoc : function(){
		var thisProduct = Products.findOne({ url : Router.current().params.product });
		return thisProduct;
	},
	
	amazonUrl : function(){
		var thisProduct = Products.findOne({ url : Router.current().params.product });
		return generateAmazonUrl(thisProduct.amazonId);
	}
	
});

