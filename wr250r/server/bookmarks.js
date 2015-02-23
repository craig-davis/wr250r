Meteor.publish('bookmarks', function(){
	return Bookmarks.find({
	//	_owner : this.userId
	});
});

