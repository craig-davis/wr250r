Router.route('/products', function(){
	
	return this.render('productsIndex');
	
});

Router.route('/products/:productCategory', function(){
	
	var productCategory = this.params.productCategory;
	
	return this.render('productCategory', {
		productCategory : productCategory
	});
	
});

Router.route('/products/:productCategory/:productName', function(){
	
	var productCategory = this.params.productCategory;
	var productName = this.params.productName;
	
	return this.render('product', {
		productCategory : productCategory,
		productName : productName
	});
	
});

