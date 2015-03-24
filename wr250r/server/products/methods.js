Meteor.methods({
	
	productView : function(product){
		Products.update({
			_id : product
		},{
			$inc : {
				views : 1
			}
		});
	},
	
	productClick : function(product){
		Products.update({
			_id : product
		},{
			$inc : {
				clicks : 1
			}
		});
	}
	
});

