export default Ember.Route.extend({
	
	sports: [],

	model: function() {
		this.set('sports',this.store.findAll('sport'));
	},


	setupController: function(controller, model) {
		controller.set('sports',this.get('sports'));
	}, 

});