Router.configure({
	layoutTemplate: 'mainLayout',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		'header': { to: 'header' },
	}
});
