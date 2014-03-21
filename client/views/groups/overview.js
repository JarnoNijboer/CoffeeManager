Template['groups-overview'].helpers({
	groups: function () {
		var userId = Meteor.userId();

		return Groups.find({
			deleted: false,
			$or: [
				{ ownerId: userId },
				{ userIds: userId }
			],
		});
	},
});

Template['groups-overview'].events({
	'click #btnGroupAdd': function (e) {
		$('#dlgGroupDetail').modal('show');
	},
});
