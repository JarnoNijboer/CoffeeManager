var OrdersController = RouteController.extend({
	template: 'orders-overview',
	yieldTemplates: {
		'header': { to: 'header' },
	},
});

Router.map(function () {
	this.route('orders', {
		path: '/orders',
		controller: OrdersController
	});
});
