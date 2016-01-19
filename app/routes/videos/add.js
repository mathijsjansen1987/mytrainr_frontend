export default Ember.Route.extend({

	setupController: function(controller, model) {
		controller.set('title', null);
		controller.set('description', null);
	},

});