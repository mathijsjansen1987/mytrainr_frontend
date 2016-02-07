import Ember from 'ember';

export default Ember.Controller.extend({


	status:'offline',
	currentPathChange: function () {
		Ember.$('#mobileNav').removeClass('show');
		//this.send('checkConnection');
	}.observes('currentPath'),

	actions: {
		toggleNav: function(){
			Ember.$('#mobileNav').toggleClass('show');
		},

		checkConnection: function() {
			var networkState = navigator.network.connection.type;

			var states = {};
			states[Connection.UNKNOWN]  = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI]     = 'WiFi connection';
			states[Connection.CELL_2G]  = 'Cell 2G connection';
			states[Connection.CELL_3G]  = 'Cell 3G connection';
			states[Connection.CELL_4G]  = 'Cell 4G connection';
			states[Connection.CELL]     = 'Cell generic connection';
			states[Connection.NONE]     = 'No network connection';
/*
			if(states[networkState] == "WiFi connection"){
				this.status = 'WIFI';
				Ember.$('#status').css('color','green');
				
			}
				
			else{
				Ember.$('#status').css('color','red');
				this.status = 'offline';
			}*/
				
			
			// alert('Connection type: ' + states[networkState]);
		},

		captureVideo: function(){
			var self = this;
			// capture callback
			var captureSuccess = function(mediaFiles) {
				var i, path, len;
				for (i = 0, len = mediaFiles.length; i < len; i += 1) {
					path = mediaFiles[i].fullPath;
					self.send('createVideo',path);
				}
			};

			// capture error callback
			var captureError = function(error) {
				navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
			};

			// start video capture
			navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1}); 

		},

		createVideo: function(path){
			self = this;
			var title = 'from'
			var description = 'mobile';
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
				alert('failure:'+reason + ":" + reason.message);
			}

			video.save().then(transitionToPost).catch(failure);
		}

	}
});
