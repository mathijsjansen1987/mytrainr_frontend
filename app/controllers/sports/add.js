import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		addSport: function(sport){

			var name = this.get('name');

			var sport = this.store.createRecord('sport', {
				name: name,
			});

			var self = this;

			function transitionToPost(sport) {
				self.transitionToRoute('sports');

			}

			function failure(reason) {
				// handle the error
				console.log(reason);
			}

			sport.save().then(transitionToPost).catch(failure);
		}

	}
});
