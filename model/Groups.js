// Schema
GroupSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	beverages: {
		type: [BeverageSchema],
		label: "Beverages to choose from",
		optional: true,
	},
	ownerId: {
		type: String,
		label: "User who created the group",
	},
	userIds: {
		type: [String],
		minCount: 1,
		label: "Members of the group",
	},
	deleted: {
		type: Boolean,
	},
});

// Collection
Groups = new Meteor.Collection2('Groups', {
	schema: GroupSchema,
	virtualFields: {
		number: function (group) {
			return group.userIds.count();
		},
	},
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

