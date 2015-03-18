generateAmazonUrl = function(amazonId){
	// TODO This will eventually load the amazon ID from settings
	
	var output = 'http://www.amazon.com/dp/' + amazonId + '/';
	
	if(Meteor.settings.public.amazonTrackingId){
		output += '?tag=' + Meteor.settings.public.amazonTrackingId;
	}
	
	return output;
	
};

newArrayFront = function(sourceArray, index){
	return _.rest(sourceArray, index).concat(_.first(sourceArray, index));
}

