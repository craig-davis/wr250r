Template.siteIndex.helpers({
	
	products : function(){
		return Products.find({
			popular : { $gte : 0 }
		},{
			sort : { popular : 1 }
		});
	},
	
	articles : function(){
		return Articles.find({
			popular : { $gte : 0 }
		},{
			sort : { popular : 1 }
		});
	}
	
});

