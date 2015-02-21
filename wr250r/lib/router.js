Router.configure({
});

Router.route('/', {name : 'index'}, function(){
	return this.render('index');
});

Router.route('/docs', function(){
	
	return this.render('docsIndex');
	
});

Router.route('/docs/:docName', function(){
	
	var docName = this.params.docName;
	
	this.layout('docBase');
	
	return this.render('doc-' + docName);
	
});

