Meteor.methods({
	articleView : function(article){
		Articles.update({
			_id : article
		},{
			$inc : {
				views : 1
			}
		});
	}
});

