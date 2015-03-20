// Scroll to top when we go to a new page
Router._filters = {
	resetScroll : function () {
		var scrollTo = window.currentScroll || 0;
		$('body').scrollTop(scrollTo);
		$('body').css('min-height', 0);
	}
};

var filters = Router._filters;

Router.onAfterAction(filters.resetScroll);

// Set the page title
Deps.autorun(function(){
	var titleBase = 'WR250R.com | The unofficial WR250R owners guide';
	
	if(Session.get('pageTitle')){
		document.title = Session.get('pageTitle') + ' | ' + titleBase;
	}else{
		document.title = titleBase;
	}
});

