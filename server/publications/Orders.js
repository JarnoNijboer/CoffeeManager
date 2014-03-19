Meteor.publish('Orders', function () {
    return Orders.find();
});

