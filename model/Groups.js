Groups = new Meteor.Collection2('Groups', {
	schema: new SimpleSchema({
		name: {
			type: String,
			label: "Name",
			max: 200
		},
	}),
});

// Collection2 already does schema checking
// Add custom permission rules if needed
Groups.allow({
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

