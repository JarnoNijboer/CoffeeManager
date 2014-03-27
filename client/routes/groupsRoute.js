var GroupsController = RouteController.extend({
	template: 'groups-overview',
	yieldTemplates: {
		'header': { to: 'header' },
	},
});

Router.map(function () {
	this.route('groups', {
		path: '/groups',
		controller: GroupsController
	});
});
