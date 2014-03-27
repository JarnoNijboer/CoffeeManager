Template['groupsDetail'].helpers({
	doc: function() {
		var groupId = $('dlgGroupDetail').data('itemId');

		return Groups.findOne(groupId);
	}
});

Template['groupsDetail'].events({
	'click #btnGroupSave': function (e) {
		$('#dlgGroupDetail').modal('hide');
	},
	'click #btnGroupRemove': function (e) {
		console.log(this, e);
var groupId = $('dlgGroupDetail').data('itemId');

this.doc = Groups.findOne(groupId);

		$('#dlgGroupRemove').modal('hide');
	},
});