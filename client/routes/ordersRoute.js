var OrdersController = RouteController.extend({
	template: 'orders-overview',
});

Router.map(function () {
	this.route('orders', {
		path: '/orders',
		controller: OrdersController
	});
});
