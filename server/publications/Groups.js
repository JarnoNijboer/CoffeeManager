Meteor.publish('Groups', function () {
	var userId = this.userId;

	return Groups.find({
		$or: [
			{ owner: userId },
			{ users: userId }
		],
	});
});
