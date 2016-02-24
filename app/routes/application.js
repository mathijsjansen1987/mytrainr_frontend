import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{


	
	sports: [],

	model: function() {
		this.set('sports',this.store.findAll('sport'));
	},


	setupController: function(controller, model) {
		controller.set('sports',this.get('sports'));
	}, 

});


