var MainController = RouteController.extend({
	template: 'main',
	yieldTemplates: {
		'header': { to: 'header' },
	},
});

Router.map(function () {
	this.route('main', {
		path :  '/',
		controller :  MainController
	});
});
