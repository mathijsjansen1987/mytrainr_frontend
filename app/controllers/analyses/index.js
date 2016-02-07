import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		removeAnalyse: function(analyse){
			if (window.confirm("Weet je zeker dat je de analyse wilt verwijderen?")) {
				this.store.find('analyse', analyse.id).then(function (post) {
					post.destroyRecord(); // => DELETE to /posts/2
				});
			}
		}
	}

});
