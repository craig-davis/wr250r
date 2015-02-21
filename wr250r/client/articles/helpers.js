Meteor.subscribe('articles');

Template.articlesIndex.helpers({
	
	articles : function(){ return Articles.find(); }
	
});

