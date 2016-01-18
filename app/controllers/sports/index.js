import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		removeSport: function(sport){

			if (window.confirm("Weet je zeker dat je de sport wilt verwijderen?")) {
				this.store.find('sport', sport.id).then(function (post) {
					post.destroyRecord(); // => DELETE to /posts/2
				});
			}

		}
	}

});
