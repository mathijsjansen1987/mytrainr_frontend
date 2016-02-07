export default Ember.Route.extend({
	
	sports: [],

	model: function() {
		this.set('sports',this.store.findAll('sport'));
	},


	setupController: function(controller, model) {
		controller.set('title', null);
		controller.set('description', null);
		controller.set('sport', null);
		controller.set('sports',this.get('sports'));
	}, 

});