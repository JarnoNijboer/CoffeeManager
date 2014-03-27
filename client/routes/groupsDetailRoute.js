var GroupsDetailController = RouteController.extend({
	template: 'groups-detail'
});

Router.map(function () {
	this.route('groupsDetail', {
		path: '/groups/:_id',
		controller: GroupsDetailController
	});
});

