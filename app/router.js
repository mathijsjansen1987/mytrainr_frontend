import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.resource('dashboard',{path: '/'});

	this.resource('videos',function(){
		this.route('index', { path: '/' });
		this.route('show', { path: '/:video_id' });
	});
	this.resource('analyses',function(){
		this.route('index', { path: '/'});
	});
	this.resource('groups',function(){
		this.route('index', { path: '/'});
	});
	this.resource('sports',function(){
		this.route('index', { path: '/'});
	});

	this.resource('profile',function(){
		this.route('edit', { path: '/edit'});
	});
});

export default Router;
