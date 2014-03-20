// Schema
OrderLineSchema = new SimpleSchema({
	beverage: {
		type: BeverageSchema,
		label: "Beverage",
	},
	number: {
		type: Number,
		label: "Times beverage is ordered",
	},
});

OrderSchema = new SimpleSchema({
	description: {
		type: String,
		label: "Description",
		max: 200
	},
	lines: {
		type: [OrderLineSchema],
		label: "Order lines of order",
	},
	groupId: {
		type: String,
		label: "Id of group where this order belongs",
	},
});

// Collection
Orders = new Meteor.Collection2('Orders', {
	schema: OrderSchema,
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

