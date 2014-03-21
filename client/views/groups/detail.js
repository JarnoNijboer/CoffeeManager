Template['groupsDetail'].helpers({

});

Template['groupsDetail'].jarno = function () {
	return Groups.find();
		// var userId = Meteor.userId();

		// return Groups.find({
		// 	deleted: false,
		// 	$or: [
		// 		{ ownerId: userId },
		// 		{ userIds: userId }
		// 	],
		// });
	},

Template['groupsDetail'].events({
	'click #btnGroupSave': function (e) {

	},
});
