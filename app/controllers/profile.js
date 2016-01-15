import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createUser: function() {

			var user = this.store.createRecord('user', {
				name: 'tester',
				password: '1234',
				emailaddress: 'test@test.nl'
			});

			var self = this;

			function transitionToPost(user) {
				self.transitionToRoute('users');
			}

			function failure(reason) {
				// handle the error
			}

			user.save().then(transitionToPost).catch(failure);
		},
	}
});
