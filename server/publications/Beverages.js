Meteor.publish('Beverages', function () {
	return Beverages.find();
});

var beverage = (function() {
	var seed = function () {
		Beverages.remove({});

		var hasItems = Beverages.find().count() !== 0;

		if (hasItems) {
			return;
		}

		var beverages = [
			{ name: 'Koffie', },
			{ name: 'Heet', },
			{ name: 'Koud', },
			{ name: 'Fris', },
			{ name: 'Cassis', },
			{ name: 'Ice tea', },
			{ name: 'Bier', },
			{ name: 'Kippensoep', },
			{ name: 'Groentensoep', },
			{ name: 'Chinese tomatensoep', },
			{ name: 'Tomatensoep', },
			{ name: 'Champignonsoep', },
			{ name: 'Kerriesoep', }
		];

		beverages.forEach(function (item) {
			Beverages.insert(item);
		});
	};

	return {
		seed: seed,
	};
}());

// Meteor.startup(beverage.seed);
