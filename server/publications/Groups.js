Meteor.publish('Groups', function () {
    return Groups.find();
});

var group = (function() {
	var seed = function () {
		Groups.remove({});

		var hasItems = Groups.find().count() !== 0;

		if (hasItems) {
			return;
		}

		var groups = [
			{ name: 'Sintrum', },
		];

		groups.forEach(function (item) {
			Groups.insert(item);
		});
	};

	return {
		seed: seed,
	};
}());

Meteor.startup(group.seed);
