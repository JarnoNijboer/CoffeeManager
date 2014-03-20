// Schema
BeverageSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	groupId: {
		type: String,
		label: "Id of group where this order belongs",
	},
});

// Collection
Beverages = new Meteor.Collection2('Beverages', {
	schema: BeverageSchema,
});

// Collection2 already does schema checking
// Add custom permission rules if needed
Beverages.allow({
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

