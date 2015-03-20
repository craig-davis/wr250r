Router.route('/products', function(){
	if(Meteor.isClient){ Session.set('pageTitle', 'Products'); }
	
	return this.render('productsIndex');
	
},{
	name : 'product.index'
});


Router.route('/products/:category', {
	
	fastRender : true,
	
	action : function(){
		if(Meteor.isClient){ Session.set('pageTitle', ProductCategories.findOne({ url : this.params.category }).title + ' Products'); }
		
		return this.render('productCategory', {
			category : this.params.category
		});
	}
	
},{
	name : 'product.category'
});


Router.route('/products/:category/:product', {
	action : function(){
		if(Meteor.isClient){ Session.set('pageTitle', Products.findOne({ url : this.params.product }).title); }
		
		return this.render('product', {
			category : this.params.category,
			product : this.params.product
		});
	}
},{
	name : 'product'
});

