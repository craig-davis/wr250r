Template.siteIndex.helpers({
	
	products : function(){
		return Products.find({
			popular : { $exists : true }
		},{
			sort : { popular : 1 }
		});
	},
	
	articles : function(){
		return Articles.find({
			popular : { $exists : 1 }
		},{
			sort : { popular : 1 }
		});
	}
	
});

