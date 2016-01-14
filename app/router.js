import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	 this.route('dashboard',{path:'/'});
	  this.resource('videos',function(){});
	 this.resource('video', { path: '/video/:video_id' });
	 this.resource('users',function(){
		  this.route('new');
	 });
});

export default Router;
