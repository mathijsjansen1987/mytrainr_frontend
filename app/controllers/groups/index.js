import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		removeGroup: function(group){

			if (window.confirm("Weet je zeker dat je de groep wilt verwijderen?")) {
				this.store.find('group', group.id).then(function (post) {
					post.destroyRecord(); // => DELETE to /posts/2
				});
			}

		}
	}
});
