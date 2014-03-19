Template['header'].events({
	'click a#btnLogout': function (e) {
		Meteor.logout();
	},
});

Template['header'].userName = function () {
	return Meteor.user().username;
}
