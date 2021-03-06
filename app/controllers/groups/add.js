import Ember from 'ember';
import DS from 'ember-data';
export default Ember.Controller.extend({


	actions: {
		addGroup: function(group){

			var name = this.get('title');
			var description = this.get('description');
			var sport = this.get('selectedSport.id');

			var group = this.store.createRecord('group', {
				name: name,
				description: description,
				sport_id: sport
			});

			var self = this;

			function transitionToPost(group) {
				self.transitionToRoute('groups');

			}

			function failure(reason) {
				// handle the error
				console.log(reason);
			}

			group.save().then(transitionToPost).catch(failure);
		}
	}
});
