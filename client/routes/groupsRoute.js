var GroupsController = RouteController.extend({
	template: 'groups-overview',
});

Router.map(function () {
	this.route('groups', {
		path: '/groups',
		controller: GroupsController
	});
});
