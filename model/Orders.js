Orders = new Meteor.Collection2('Orders', {
	schema: new SimpleSchema({
		description: {
			type: String,
			label: "Description",
			max: 200
		},
	}),
});

// Collection2 already does schema checking
// Add custom permission rules if needed
Orders.allow({
	insert : function () {
		return true;
	},
	update : function () {
		return true;
	},
	remove : function () {
		return true;
	}
});

