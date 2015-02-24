Router.route('/products', function(){
	
	return this.render('productsIndex');
	
},{
	name : 'product.index'
});

Router.route('/products/:category', {
	action : function(){
		return this.render('productCategory', {
			category : this.params.productCategory
		});
	},
},{
	name : 'product.category'
});

Router.route('/products/:category/:product', {
	action : function(){
		return this.render('product', {
			category : this.params.productCategory,
			product : this.params.product
		});
	}
},{
	name : 'product'
});

