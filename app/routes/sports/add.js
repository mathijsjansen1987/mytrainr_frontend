export default Ember.Route.extend({

	setupController: function(controller, model) {
		controller.set('name', null);
	},

});