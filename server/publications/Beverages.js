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
			{ description: 'Koffie', },
			{ description: 'Heet', },
			{ description: 'Koud', },
			{ description: 'Fris', },
			{ description: 'Cassis', },
			{ description: 'Ice tea', },
			{ description: 'Bier', },
			{ description: 'Kippensoep', },
			{ description: 'Groentensoep', },
			{ description: 'Chinese tomatensoep', },
			{ description: 'Tomatensoep', },
			{ description: 'Champignonsoep', },
			{ description: 'Kerriesoep', }
		];

		beverages.forEach(function (item) {
			Beverages.insert(item);
		});
	};

	return {
		seed: seed,
	};
}());

Meteor.startup(beverage.seed);
