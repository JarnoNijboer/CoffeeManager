Template['groups-overview'].helpers({
	groups: function () {
		var userId = Meteor.userId();

		return Groups.find();
	},
	isAdmin: function () {

	}
});

Template['groups-overview'].events({
	'click #btnGroupAdd': function (e) {
		$('#dlgGroupDetail').modal('show');
	},
	'click a[data-action=remove]': function (e) {
		$('#dlgGroupRemove')
			.data('itemId', this._id)
			.modal('show');
	},
});
