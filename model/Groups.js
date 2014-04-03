// Schema
GroupSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name'
	},
	beverages: {
		type: [BeverageSchema],
		label: 'Beverages',
		optional: true,
	},
	owner: {
		type: String,
		label: 'Admin/User',
		autoValue: function () {
			if (this.isSet) {
				return this.value;
			}
			else {
				return this.userId;
			}
		},
		denyUpdate: true
	},
	users: {
		type: [String],
		label: 'Members',
		autoValue: function () {
			if (this.isSet) {
				return this.value;
			}
			else {
				return [this.userId];
			}
		},
	}
});

// Collection
Groups = new Meteor.Collection2('Groups', {
	schema: GroupSchema,
	virtualFields: {
		number: function (group) {
			return group.users ? group.users.length : 0;
		},
		admin: function (group) {
			var user = Meteor.users.findOne(group.owner);

			return user ? user.username : '';
		},
		isAdmin: function (group) {
			var userId = Meteor.userId();

			return group.owner === userId;
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
