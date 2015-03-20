Router.route('/products', function(){
	if(Meteor.isClient){ Session.set('pageTitle', 'Products'); }
	
	return this.render('productsIndex');
	
},{
	name : 'product.index'
});


Router.route('/products/:category', {
	
	fastRender : true,
	
	action : function(){
		var productCategoryDoc = ProductCategories.findOne({ url : this.params.category });
		
		// Category Not Found
		if(!productCategoryDoc){
			return this.render(Router.lookupNotFoundTemplate());
		}
		
		// Page Title
		if(Meteor.isClient){ Session.set('pageTitle', productCategoryDoc.title + ' Products'); }
		
		return this.render('productCategory', {
			category : this.params.category
		});
	}
	
},{
	name : 'product.category'
});


Router.route('/products/:category/:product', {
	
	fastRender : true,
	
	action : function(){
		var productDoc = Products.findOne({ url : this.params.product });
		
		// Product Not Found
		if(!productDoc){
			return this.render(Router.lookupNotFoundTemplate());
		}
		
		// Page Title
		if(Meteor.isClient){ Session.set('pageTitle', productDoc.title); }
		
		return this.render('product', {
			category : this.params.category,
			product : this.params.product
		});
	}
},{
	name : 'product'
});

