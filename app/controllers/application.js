import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		captureVideo: function(){
			var self = this;
			// capture callback
			var captureSuccess = function(mediaFiles) {
				var i, path, len;
				for (i = 0, len = mediaFiles.length; i < len; i += 1) {
					path = mediaFiles[i].fullPath;
					// do something interesting with the file

					var title = 'from mobile'
					var description = 'this is recorder by mobile';
					var url = path;

					var video = this.store.createRecord('video', {
						title: title,
						description: description,
						url: url,
					});					

					function transitionToPost(video) {
						self.transitionToRoute('videos');
					}

					function failure(reason) {
						// handle the error
						console.log(reason);
					}

					video.save().then(transitionToPost).catch(failure);


				}
			};

			// capture error callback
			var captureError = function(error) {
				navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
			};

			// start video capture
			navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1}); 

		}

	}
});
