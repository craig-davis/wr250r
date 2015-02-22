Router.route('/products', function(){
	
	return this.render('productsIndex');
	
});

Router.route('/products/:category', function(){
	
	return this.render('productCategory', {
		category : this.params.productCategory
	});
	
});

Router.route('/products/:category/:product', function(){
	
	return this.render('product', {
		category : this.params.productCategory,
		product : this.params.product
	});
	
});

