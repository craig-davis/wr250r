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
			url : Router.current().params.productCategory
		});
	},
	
	products : function(){
		return Products.find({
			category : Router.current().params.productCategory
		});
	}
	
});

