Meteor.publish('products', function(){
	return Products.find();
});

Meteor.publish('productCategories', function(){
	return ProductCategories.find();
});

