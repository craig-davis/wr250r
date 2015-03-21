Template.siteIndex.helpers({
	
	products : function(){
		// Why the heck wont $exists work here?
		
		var results = Products.find({
		//	latetsProduct : { $exists : true }
		},{
			sort : { popular : 1 }
		}).fetch();
		
		return _.filter(results, function(product){
			return (product.popular && product.popular >= 0);
		});
	},
	
	articles : function(){
		var results = Articles.find({
			//popular : { $exists : 1 }
		},{
			sort : { popular : 1 }
		}).fetch();
		
		return _.filter(results, function(article){
			return (article.popular);
			//return (article.popular && article.popular >= 0);
		});
	}
	
});

