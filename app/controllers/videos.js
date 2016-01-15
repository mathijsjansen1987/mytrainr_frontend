import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

	  removeVideo: function(video){
		  // remove video by id
		  console.log(video);
	  }

  }
});
