Meteor.methods({
	
	'addBookmark' : function(params){
		if(!Meteor.userId()){ throw new Meteor.Error('not-authorized'); }
		if(!params.doc_id || !params.type){ return false; }
		
		if(Bookmarks.findOne({
			_owner : Meteor.userId(),
			doc_id : params.doc_id
		})){
			// Already bookmarked
			return false;
		}
		
		Bookmarks.insert({
			_owner : Meteor.userId(),
			type : params.type,
			doc_id : params.doc_id
		});
		
		return true;
	},
	
	'removeBookmark' : function(params){
		if(!Meteor.userId()){ throw new Meteor.Error('not-authorized'); }
		
		Bookmarks.remove({
			_owner : Meteor.userId(),
			doc_id : params.doc_id
		});
	}
	
});

