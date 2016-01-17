import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		removeVideo: function(video){

			if (window.confirm("Weet je zeker dat je de video wilt verwijderen?")) {
				this.store.find('video', video.id).then(function (post) {
					post.destroyRecord(); // => DELETE to /posts/2
				});
			}

		}
	}

});
