
// {{#if equals foo '10' }}
UI.registerHelper('equals', function (a, b){
	return a === b;
});

// {{ staticContentUrl }}
UI.registerHelper('staticContentUrl', function (){
	return Meteor.settings.public.staticContentUrl;
});

