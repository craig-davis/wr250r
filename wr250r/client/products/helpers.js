Template.productsIndex.helpers({
	
	categories : function(){
		return ProductCategories.find({
			sort : { $gte : 0 }
		}, {
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
		var products = Products.find({
			category : Router.current().params.category
		},{
			sort : { sort : 1 }
		}).fetch();
		
		_.each(products, function(product){
			if(Bookmarks.find({ doc_id : product._id }).count()){
				product.bookmarked = true;
			}
		});
		
		return products;
	}
	
});

Template.product.helpers({
	
	categoryDoc : function(){
		return ProductCategories.findOne({
			url : Router.current().params.category
		});
	},
	
	productDoc : function(){
		return Products.findOne({
			url : Router.current().params.product
		});
	},
	
	bookmarked : function(){
		var thisProduct = Products.findOne({ url : Router.current().params.product });
		if(!thisProduct){ return false; }
		
		return Bookmarks.find({
			doc_id : thisProduct._id
		}).count();
		
	},
	
	productUrl : function(){
		var thisProduct = Products.findOne({ url : Router.current().params.product });
		if(!thisProduct){ return '';}
		
		if(thisProduct.amazonId){
			return generateAmazonUrl(thisProduct.amazonId);
		}else if(thisProduct.productUrl){
			return thisProduct.productUrl;
		}
		
		return '#';
		
	}
	
});

