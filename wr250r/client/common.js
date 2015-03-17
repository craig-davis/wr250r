// Scroll to top when we go to a new page
Router._filters = {
	resetScroll : function () {
		var scrollTo = window.currentScroll || 0;
		$('body').scrollTop(scrollTo);
		$('body').css('min-height', 0);
	}
};

var filters = Router._filters;

if(Meteor.isClient) {
	Router.onAfterAction(filters.resetScroll);
}

