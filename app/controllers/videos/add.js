import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		addVideo: function(video){

			var title = this.get('title');
			var description = this.get('description');

			var video = this.store.createRecord('video', {
				title: title,
				description: description,
			});

			var self = this;

			function transitionToPost(video) {
				self.transitionToRoute('videos');

			}

			function failure(reason) {
				// handle the error
				console.log(reason);
			}

			video.save().then(transitionToPost).catch(failure);
		}

	}
});
