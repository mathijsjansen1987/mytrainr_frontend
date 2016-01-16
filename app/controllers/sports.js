import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

	  removeSport: function(video){
		  // remove video by id
		  console.log(video);
	  }

  }
});
