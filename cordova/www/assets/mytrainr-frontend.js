"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('mytrainr-frontend/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].RESTAdapter.extend({
    host: 'http://dev.code.rehab/mytrainr_backend',
    namespace: 'api/v1'
  });

});
define('mytrainr-frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'mytrainr-frontend/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('mytrainr-frontend/components/cdv-nav-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'header'
  });

});
define('mytrainr-frontend/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, fa_icon) {

	'use strict';



	exports['default'] = fa_icon['default'];

});
define('mytrainr-frontend/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, fa_list_icon) {

	'use strict';



	exports['default'] = fa_list_icon['default'];

});
define('mytrainr-frontend/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, fa_list) {

	'use strict';



	exports['default'] = fa_list['default'];

});
define('mytrainr-frontend/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, fa_stack) {

	'use strict';



	exports['default'] = fa_stack['default'];

});
define('mytrainr-frontend/controllers/analyses', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {}
	});

});
define('mytrainr-frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			captureVideo: function captureVideo() {
				var self = this;
				// capture callback
				var captureSuccess = function captureSuccess(mediaFiles) {
					var i, path, len;
					for (i = 0, len = mediaFiles.length; i < len; i += 1) {
						var transitionToPost = function transitionToPost(video) {
							self.transitionToRoute('videos');
						};

						var failure = function failure(reason) {
							// handle the error
							console.log(reason);
						};

						path = mediaFiles[i].fullPath;
						// do something interesting with the file

						var title = 'from mobile';
						var description = 'this is recorder by mobile';
						var url = path;

						var video = this.store.createRecord('video', {
							title: title,
							description: description,
							url: url
						});

						video.save().then(transitionToPost)['catch'](failure);
					}
				};

				// capture error callback
				var captureError = function captureError(error) {
					navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
				};

				// start video capture
				navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 1 });
			}

		}
	});

});
define('mytrainr-frontend/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('mytrainr-frontend/controllers/groups/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			addGroup: function addGroup(group) {

				var name = this.get('title');
				var description = this.get('description');
				var sport = this.get('sport');

				var group = this.store.createRecord('group', {
					name: name,
					description: description,
					sport_id: sport
				});

				var self = this;

				function transitionToPost(group) {
					self.transitionToRoute('groups');
				}

				function failure(reason) {
					// handle the error
					console.log(reason);
				}

				group.save().then(transitionToPost)['catch'](failure);
			}
		}
	});

});
define('mytrainr-frontend/controllers/groups/edit', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

				actions: {
							editGroup: function editGroup(group) {

										var name = this.get('title');
										var description = this.get('description');
										var sport = this.get('sport');

										var group = this.store.updateRecord('group', {
													name: name,
													description: description,
													sport_id: sport
										});

										var self = this;

										function transitionToPost(group) {
													self.transitionToRoute('groups');
										}

										function failure(reason) {
													// handle the error
													console.log(reason);
										}

										group.save().then(transitionToPost)['catch'](failure);
							}
				}
	});

});
define('mytrainr-frontend/controllers/groups/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			removeGroup: function removeGroup(group) {

				if (window.confirm("Weet je zeker dat je de groep wilt verwijderen?")) {
					this.store.find('group', group.id).then(function (post) {
						post.destroyRecord(); // => DELETE to /posts/2
					});
				}
			}
		}
	});

});
define('mytrainr-frontend/controllers/groups', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {}
	});

});
define('mytrainr-frontend/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('mytrainr-frontend/controllers/profile', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			createUser: function createUser() {

				var user = this.store.createRecord('user', {
					name: 'tester',
					password: '1234',
					emailaddress: 'test@test.nl'
				});

				var self = this;

				function transitionToPost(user) {
					self.transitionToRoute('users');
				}

				function failure(reason) {
					// handle the error
				}

				user.save().then(transitionToPost)['catch'](failure);
			}
		}
	});

});
define('mytrainr-frontend/controllers/sports/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		name: null,
		beforeModel: function beforeModel() {
			this.set('name', '');
		},

		actions: {

			addSport: function addSport(sport) {

				var name = this.get('name');

				var sport = this.store.createRecord('sport', {
					name: name
				});

				var self = this;

				function transitionToPost(sport) {
					self.transitionToRoute('sports');
				}

				function failure(reason) {
					// handle the error
					console.log(reason);
				}

				sport.save().then(transitionToPost)['catch'](failure);
			}

		}
	});

});
define('mytrainr-frontend/controllers/sports/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			removeSport: function removeSport(sport) {

				if (window.confirm("Weet je zeker dat je de sport wilt verwijderen?")) {
					this.store.find('sport', sport.id).then(function (post) {
						post.destroyRecord(); // => DELETE to /posts/2
					});
				}
			}
		}

	});

});
define('mytrainr-frontend/controllers/sports', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			removeSport: function removeSport(video) {
				// remove video by id
				console.log(video);
			}

		}
	});

});
define('mytrainr-frontend/controllers/videos/add', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			addVideo: function addVideo(video) {

				var title = this.get('title');
				var description = this.get('description');

				var video = this.store.createRecord('video', {
					title: title,
					description: description
				});

				var self = this;

				function transitionToPost(video) {
					self.transitionToRoute('videos');
				}

				function failure(reason) {
					// handle the error
					console.log(reason);
				}

				video.save().then(transitionToPost)['catch'](failure);
			}

		}
	});

});
define('mytrainr-frontend/controllers/videos/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			removeVideo: function removeVideo(video) {

				if (window.confirm("Weet je zeker dat je de video wilt verwijderen?")) {
					this.store.find('video', video.id).then(function (post) {
						post.destroyRecord(); // => DELETE to /posts/2
					});
				}
			}
		}

	});

});
define('mytrainr-frontend/controllers/videos', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('mytrainr-frontend/initializers/export-application-global', ['exports', 'ember', 'mytrainr-frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('mytrainr-frontend/initializers/in-app-livereload', ['exports', 'mytrainr-frontend/config/environment', 'ember-cli-cordova/initializers/in-app-livereload'], function (exports, config, reloadInitializer) {

  'use strict';

  /* globals cordova */

  var inAppReload = reloadInitializer['default'].initialize;

  var initialize = function initialize(container, app) {
    if (typeof cordova === 'undefined' || config['default'].environment !== 'development' || config['default'].cordova && (!config['default'].cordova.liveReload || !config['default'].cordova.liveReload.enabled)) {
      return;
    }

    return inAppReload(container, app, config['default']);
  };

  exports['default'] = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };

  exports.initialize = initialize;

});
define('mytrainr-frontend/instance-initializers/app-version', ['exports', 'mytrainr-frontend/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('mytrainr-frontend/instance-initializers/body-class', ['exports', 'ember-body-class/instance-initializers/body-class'], function (exports, body_class) {

	'use strict';



	exports['default'] = body_class['default'];
	exports.initialize = body_class.initialize;

});
define('mytrainr-frontend/models/analyse', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		name: DS['default'].attr(),
		type: DS['default'].attr(),
		date: DS['default'].attr()
	});

});
define('mytrainr-frontend/models/group', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		name: DS['default'].attr(),
		description: DS['default'].attr(),
		sport_id: DS['default'].attr()
	});

});
define('mytrainr-frontend/models/sport', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr()
  });

});
define('mytrainr-frontend/models/user', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		name: DS['default'].attr(),
		emailaddress: DS['default'].attr(),
		password: DS['default'].attr()
	});

});
define('mytrainr-frontend/models/video', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr(),
    url: DS['default'].attr(),
    imageUrl: DS['default'].attr(),
    description: DS['default'].attr()
  });

});
define('mytrainr-frontend/router', ['exports', 'ember', 'mytrainr-frontend/config/environment'], function (exports, Ember, config) {

	'use strict';

	var Router = Ember['default'].Router.extend({
		location: config['default'].locationType
	});

	Router.map(function () {
		this.resource('dashboard', { path: '/' });

		this.resource('videos', function () {
			this.route('index', { path: '/' });
			this.route('show', { path: '/:video_id' });
			this.route('add', { path: '/add' });
		});
		this.resource('analyses', function () {
			this.route('index', { path: '/' });
		});
		this.resource('groups', function () {
			this.route('index', { path: '/' });
			this.route('add', { path: '/add' });
			this.route('edit', { path: '/edit/:group_id' });
		});
		this.resource('sports', function () {
			this.route('index', { path: '/' });
			this.route('add', { path: '/add' });
		});

		this.resource('profile', function () {
			this.route('edit', { path: '/edit' });
		});
	});

	exports['default'] = Router;

});
define('mytrainr-frontend/routes/analyses', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('analyse');
    }
  });

});
define('mytrainr-frontend/routes/groups/add', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Route.extend({

		setupController: function setupController(controller, model) {
			controller.set('title', null);
			controller.set('description', null);
			controller.set('sport', null);
		}

	});

});
define('mytrainr-frontend/routes/groups', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('group');
    }
  });

});
define('mytrainr-frontend/routes/profile', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('user');
    }
  });

});
define('mytrainr-frontend/routes/sports/add', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Route.extend({

		setupController: function setupController(controller, model) {
			controller.set('name', null);
		}

	});

});
define('mytrainr-frontend/routes/sports', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('sport');
    }
  });

});
define('mytrainr-frontend/routes/videos/add', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Route.extend({

		setupController: function setupController(controller, model) {
			controller.set('title', null);
			controller.set('description', null);
		}

	});

});
define('mytrainr-frontend/routes/videos', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('video');
    }
  });

});
define('mytrainr-frontend/templates/analyses/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 2
              }
            },
            "moduleName": "mytrainr-frontend/templates/analyses/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("section");
            dom.setAttribute(el1,"class","info");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("Bekijk");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("x");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [3]);
            var element1 = dom.childAt(element0, [11]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
            morphs[3] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [
            ["content","analyse.type",["loc",[null,[9,2],[9,18]]]],
            ["content","analyse.name",["loc",[null,[11,7],[11,23]]]],
            ["content","analyse.description",["loc",[null,[13,6],[13,29]]]],
            ["element","action",["removeAnalyse",["get","analyse",["loc",[null,[16,36],[16,43]]]]],[],["loc",[null,[16,11],[16,45]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "mytrainr-frontend/templates/analyses/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","video-item");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","link-to",["videos.show",["get","analyse",["loc",[null,[8,27],[8,34]]]]],[],0,null,["loc",[null,[8,2],[18,14]]]]
        ],
        locals: ["analyse"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/analyses/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Analyses");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["inline","log",[["get","model",["loc",[null,[3,6],[3,11]]]]],[],["loc",[null,[3,0],[3,13]]]],
        ["block","each",[["get","model",["loc",[null,[6,10],[6,15]]]]],[],0,null,["loc",[null,[6,2],[20,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 2,
              "column": 70
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","assets/images/logo.png");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 54
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Dashboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["home"],[],["loc",[null,[4,26],[4,44]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 56
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Videos");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["video-camera"],[],["loc",[null,[5,23],[5,49]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 58
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Analyses");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["area-chart"],[],["loc",[null,[6,25],[6,49]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 50
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Groepen");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["users"],[],["loc",[null,[7,23],[7,42]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 53
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Sporten");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["futbol-o"],[],["loc",[null,[8,23],[8,45]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 43
            }
          },
          "moduleName": "mytrainr-frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Mathijs Jansen");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1,"id","main");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"id","profileInfo");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"id","profileImg");
        dom.setAttribute(el3,"src","");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","btn captureVideo");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"id","content");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [7]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,3,3);
        morphs[3] = dom.createMorphAt(element1,5,5);
        morphs[4] = dom.createMorphAt(element1,7,7);
        morphs[5] = dom.createMorphAt(element1,9,9);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        morphs[7] = dom.createElementMorph(element2);
        morphs[8] = dom.createMorphAt(element2,0,0);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboard"],["id","logo"],0,null,["loc",[null,[2,1],[2,82]]]],
        ["block","link-to",["dashboard"],[],1,null,["loc",[null,[4,2],[4,66]]]],
        ["block","link-to",["videos"],[],2,null,["loc",[null,[5,2],[5,68]]]],
        ["block","link-to",["analyses"],[],3,null,["loc",[null,[6,2],[6,70]]]],
        ["block","link-to",["groups"],[],4,null,["loc",[null,[7,2],[7,62]]]],
        ["block","link-to",["sports"],[],5,null,["loc",[null,[8,2],[8,65]]]],
        ["block","link-to",["profile.edit"],[],6,null,["loc",[null,[11,2],[11,55]]]],
        ["element","action",["captureVideo"],[],["loc",[null,[14,34],[14,59]]]],
        ["inline","fa-icon",["video-camera"],[],["loc",[null,[14,60],[14,86]]]],
        ["content","outlet",["loc",[null,[17,1],[17,11]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  }()));

});
define('mytrainr-frontend/templates/cdv-generic-nav-bar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["icon"," ",["subexpr","-bind-attr-class",[["get","nav.leftButton.icon",[]],"icon"],[],[]]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(element3,1,1);
          morphs[2] = dom.createMorphAt(element3,3,3);
          return morphs;
        },
        statements: [
          ["element","action",["leftButton"],[],["loc",[null,[2,10],[2,33]]]],
          ["block","if",[["get","nav.leftButton.icon",["loc",[null,[3,10],[3,29]]]]],[],0,null,["loc",[null,[3,4],[5,11]]]],
          ["content","nav.leftButton.text",["loc",[null,[6,4],[6,27]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["content","nav.title.text",["loc",[null,[12,4],[12,22]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 4
              }
            },
            "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["icon"," ",["subexpr","-bind-attr-class",[["get","nav.rightButton.icon",[]],"icon"],[],[]]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1,1,1);
          morphs[2] = dom.createMorphAt(element1,3,3);
          return morphs;
        },
        statements: [
          ["element","action",["rightButton"],[],["loc",[null,[17,10],[17,34]]]],
          ["block","if",[["get","nav.rightButton.icon",["loc",[null,[18,10],[18,30]]]]],[],0,null,["loc",[null,[18,4],[20,11]]]],
          ["content","nav.rightButton.text",["loc",[null,[21,4],[21,28]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/cdv-generic-nav-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","nav.leftButton.text",["loc",[null,[1,6],[1,25]]]]],[],0,null,["loc",[null,[1,0],[8,7]]]],
        ["block","if",[["get","nav.title.text",["loc",[null,[10,6],[10,20]]]]],[],1,null,["loc",[null,[10,0],[14,7]]]],
        ["block","if",[["get","nav.rightButton.text",["loc",[null,[16,6],[16,26]]]]],[],2,null,["loc",[null,[16,0],[23,7]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('mytrainr-frontend/templates/components/cdv-nav-bar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/components/cdv-nav-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('mytrainr-frontend/templates/dashboard', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/dashboard.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Dashboard");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('mytrainr-frontend/templates/groups/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 30
            }
          },
          "moduleName": "mytrainr-frontend/templates/groups/add.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Annuleren");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/groups/add.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Groep toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        morphs[4] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","title",["loc",[null,[4,27],[4,32]]]]],[],[]],"placeholder","titel","size","50"],["loc",[null,[4,1],[4,64]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","description",["loc",[null,[8,18],[8,29]]]]],[],[]],"placeholder","beschrijving","cols","80","rows","6"],["loc",[null,[8,1],[8,78]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","sport",["loc",[null,[12,27],[12,32]]]]],[],[]],"placeholder","sport","size","50"],["loc",[null,[12,1],[12,65]]]],
        ["block","link-to",["groups"],[],0,null,["loc",[null,[15,0],[15,42]]]],
        ["element","action",["addGroup"],[],["loc",[null,[16,8],[16,29]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/templates/groups/edit', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 30
            }
          },
          "moduleName": "mytrainr-frontend/templates/groups/edit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Annuleren");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 13
          }
        },
        "moduleName": "mytrainr-frontend/templates/groups/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Groep wijzigen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        morphs[4] = dom.createElementMorph(element0);
        morphs[5] = dom.createMorphAt(fragment,12,12,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","title",["loc",[null,[4,27],[4,32]]]]],[],[]],"placeholder","titel","size","50"],["loc",[null,[4,1],[4,64]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","description",["loc",[null,[8,18],[8,29]]]]],[],[]],"placeholder","beschrijving","cols","80","rows","6"],["loc",[null,[8,1],[8,78]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","sport",["loc",[null,[12,27],[12,32]]]]],[],[]],"placeholder","sport","size","50"],["loc",[null,[12,1],[12,65]]]],
        ["block","link-to",["groups"],[],0,null,["loc",[null,[15,0],[15,42]]]],
        ["element","action",["addGroup"],[],["loc",[null,[16,8],[16,29]]]],
        ["inline","log",[["get","model",["loc",[null,[18,6],[18,11]]]]],[],["loc",[null,[18,0],[18,13]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/templates/groups/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 59
            }
          },
          "moduleName": "mytrainr-frontend/templates/groups/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Groep toevoegen");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["plus"],[],["loc",[null,[2,25],[2,43]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 40
              }
            },
            "moduleName": "mytrainr-frontend/templates/groups/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("wijzig");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "mytrainr-frontend/templates/groups/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","group-item");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("x");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0,1,1);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["content","group.name",["loc",[null,[6,2],[6,16]]]],
          ["element","action",["removeGroup",["get","group",["loc",[null,[7,33],[7,38]]]]],[],["loc",[null,[7,10],[7,40]]]],
          ["block","link-to",["groups.edit",["get","group",["loc",[null,[8,27],[8,32]]]]],[],0,null,["loc",[null,[8,2],[8,52]]]]
        ],
        locals: ["group"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/groups/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Groepen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["groups.add"],[],0,null,["loc",[null,[2,0],[2,71]]]],
        ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],1,null,["loc",[null,[4,2],[10,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('mytrainr-frontend/templates/profile/edit', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/profile/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Profiel wijzigen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","log",[["get","model",["loc",[null,[3,6],[3,11]]]]],[],["loc",[null,[3,0],[3,13]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('mytrainr-frontend/templates/profile/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 53
            }
          },
          "moduleName": "mytrainr-frontend/templates/profile/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(">Maak nieuwe gebruiker aan");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "mytrainr-frontend/templates/profile/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          return morphs;
        },
        statements: [
          ["content","user.name",["loc",[null,[8,6],[8,19]]]],
          ["content","user.emailaddress",["loc",[null,[9,6],[9,27]]]]
        ],
        locals: ["user"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/profile/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Gebruikers");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["profile.edit"],[],0,null,["loc",[null,[3,0],[3,65]]]],
        ["block","each",[["get","model",["loc",[null,[6,10],[6,15]]]]],[],1,null,["loc",[null,[6,2],[11,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('mytrainr-frontend/templates/sports/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 30
            }
          },
          "moduleName": "mytrainr-frontend/templates/sports/add.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Annuleren");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/sports/add.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Sport toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [6]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[2] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","name",["loc",[null,[4,27],[4,31]]]]],[],[]],"placeholder","titel","size","50"],["loc",[null,[4,1],[4,63]]]],
        ["block","link-to",["sports"],[],0,null,["loc",[null,[7,0],[7,42]]]],
        ["element","action",["addSport"],[],["loc",[null,[8,8],[8,29]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/templates/sports/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 58
            }
          },
          "moduleName": "mytrainr-frontend/templates/sports/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Sport toevoegen");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["plus"],[],["loc",[null,[2,25],[2,43]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "mytrainr-frontend/templates/sports/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","sport-item");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("x");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0,1,1);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["content","sport.name",["loc",[null,[6,2],[6,16]]]],
          ["element","action",["removeSport",["get","sport",["loc",[null,[7,33],[7,38]]]]],[],["loc",[null,[7,10],[7,40]]]]
        ],
        locals: ["sport"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/sports/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Sporten");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["sports.add"],[],0,null,["loc",[null,[2,0],[2,70]]]],
        ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],1,null,["loc",[null,[4,2],[9,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('mytrainr-frontend/templates/videos/add', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 42
            }
          },
          "moduleName": "mytrainr-frontend/templates/videos/add.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Annuleren");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/videos/add.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Video toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn");
        var el2 = dom.createTextNode("Toevoegen");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[2] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[3] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","title",["loc",[null,[4,27],[4,32]]]]],[],[]],"placeholder","titel","size","50"],["loc",[null,[4,1],[4,64]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","description",["loc",[null,[8,18],[8,29]]]]],[],[]],"placeholder","beschrijving","cols","80","rows","6"],["loc",[null,[8,1],[8,78]]]],
        ["block","link-to",["videos"],["class","btn"],0,null,["loc",[null,[11,0],[11,54]]]],
        ["element","action",["addVideo"],[],["loc",[null,[12,20],[12,42]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/templates/videos/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 72
            }
          },
          "moduleName": "mytrainr-frontend/templates/videos/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Video toevoegen");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["upload"],[],["loc",[null,[3,37],[3,57]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "mytrainr-frontend/templates/videos/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"width","285");
            dom.setAttribute(el1,"height","175");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("section");
            dom.setAttribute(el1,"class","info");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("hr");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("Bekijk");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            var el3 = dom.createTextNode("x");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(fragment, [3]);
            var element2 = dom.childAt(element1, [11]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
            morphs[3] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [
            ["attribute","src",["concat",[["get","video.imageUrl",["loc",[null,[8,14],[8,28]]]]]]],
            ["content","video.title",["loc",[null,[10,7],[10,22]]]],
            ["content","video.description",["loc",[null,[12,6],[12,27]]]],
            ["element","action",["removeVideo",["get","video",["loc",[null,[15,34],[15,39]]]]],[],["loc",[null,[15,11],[15,41]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "mytrainr-frontend/templates/videos/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","video-item");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","link-to",["videos.show",["get","video",["loc",[null,[7,27],[7,32]]]]],[],0,null,["loc",[null,[7,2],[17,14]]]]
        ],
        locals: ["video"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/videos/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Videos");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["videos.add"],["class","btn"],0,null,["loc",[null,[3,0],[3,84]]]],
        ["block","each",[["get","model",["loc",[null,[5,10],[5,15]]]]],[],1,null,["loc",[null,[5,2],[19,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('mytrainr-frontend/templates/videos/loading', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/videos/loading.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Loading videos!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('mytrainr-frontend/templates/videos/show', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 66
            }
          },
          "moduleName": "mytrainr-frontend/templates/videos/show.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Terug naar overzicht");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["inline","fa-icon",["arrow-left"],[],["loc",[null,[4,21],[4,45]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "mytrainr-frontend/templates/videos/show.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Video bekijken");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("video");
        dom.setAttribute(el1,"controls","");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("source");
        dom.setAttribute(el2,"type","video/mp4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"download","");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" Download de video");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8, 1]);
        var element1 = dom.childAt(fragment, [12]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[2] = dom.createAttrMorph(element0, 'src');
        morphs[3] = dom.createAttrMorph(element1, 'href');
        morphs[4] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[2,3],[2,18]]]],
        ["block","link-to",["videos"],[],0,null,["loc",[null,[4,0],[4,78]]]],
        ["attribute","src",["concat",[["get","model.url",["loc",[null,[7,16],[7,25]]]]]]],
        ["attribute","href",["concat",[["get","model.url",["loc",[null,[10,11],[10,20]]]]]]],
        ["inline","fa-icon",["download"],[],["loc",[null,[10,33],[10,55]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('mytrainr-frontend/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/analyses.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/analyses.js should pass jshint', function() { 
    ok(true, 'controllers/analyses.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 16, col 46, Missing semicolon.\ncontrollers/application.js: line 26, col 21, Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\ncontrollers/application.js: line 30, col 21, Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\ncontrollers/application.js: line 26, col 47, \'video\' is defined but never used.\n\n4 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/groups/add.jshint', function () {

  'use strict';

  module('JSHint - controllers/groups');
  test('controllers/groups/add.js should pass jshint', function() { 
    ok(false, 'controllers/groups/add.js should pass jshint.\ncontrollers/groups/add.js: line 12, col 23, \'group\' is already defined.\ncontrollers/groups/add.js: line 20, col 39, \'group\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/groups/edit.jshint', function () {

  'use strict';

  module('JSHint - controllers/groups');
  test('controllers/groups/edit.js should pass jshint', function() { 
    ok(false, 'controllers/groups/edit.js should pass jshint.\ncontrollers/groups/edit.js: line 13, col 23, \'group\' is already defined.\ncontrollers/groups/edit.js: line 21, col 39, \'group\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/groups/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/groups');
  test('controllers/groups/index.js should pass jshint', function() { 
    ok(true, 'controllers/groups/index.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/groups.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/groups.js should pass jshint', function() { 
    ok(true, 'controllers/groups.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/profile.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/profile.js should pass jshint', function() { 
    ok(false, 'controllers/profile.js should pass jshint.\ncontrollers/profile.js: line 16, col 39, \'user\' is defined but never used.\ncontrollers/profile.js: line 20, col 30, \'reason\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/sports/add.jshint', function () {

  'use strict';

  module('JSHint - controllers/sports');
  test('controllers/sports/add.js should pass jshint', function() { 
    ok(false, 'controllers/sports/add.js should pass jshint.\ncontrollers/sports/add.js: line 16, col 23, \'sport\' is already defined.\ncontrollers/sports/add.js: line 22, col 39, \'sport\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/sports/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/sports');
  test('controllers/sports/index.js should pass jshint', function() { 
    ok(true, 'controllers/sports/index.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/sports.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/sports.js should pass jshint', function() { 
    ok(true, 'controllers/sports.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/videos/add.jshint', function () {

  'use strict';

  module('JSHint - controllers/videos');
  test('controllers/videos/add.js should pass jshint', function() { 
    ok(false, 'controllers/videos/add.js should pass jshint.\ncontrollers/videos/add.js: line 12, col 23, \'video\' is already defined.\ncontrollers/videos/add.js: line 19, col 39, \'video\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/controllers/videos/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/videos');
  test('controllers/videos/index.js should pass jshint', function() { 
    ok(true, 'controllers/videos/index.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/controllers/videos.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/videos.js should pass jshint', function() { 
    ok(true, 'controllers/videos.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'mytrainr-frontend/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('mytrainr-frontend/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/helpers/start-app', ['exports', 'ember', 'mytrainr-frontend/app', 'mytrainr-frontend/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('mytrainr-frontend/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/models/analyse.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/analyse.js should pass jshint', function() { 
    ok(true, 'models/analyse.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/models/group.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/group.js should pass jshint', function() { 
    ok(true, 'models/group.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/models/sport.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/sport.js should pass jshint', function() { 
    ok(true, 'models/sport.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/models/user.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/user.js should pass jshint', function() { 
    ok(true, 'models/user.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/models/video.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/video.js should pass jshint', function() { 
    ok(true, 'models/video.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/routes/analyses.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/analyses.js should pass jshint', function() { 
    ok(true, 'routes/analyses.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/routes/groups/add.jshint', function () {

  'use strict';

  module('JSHint - routes/groups');
  test('routes/groups/add.js should pass jshint', function() { 
    ok(false, 'routes/groups/add.js should pass jshint.\nroutes/groups/add.js: line 1, col 16, \'Ember\' is not defined.\nroutes/groups/add.js: line 3, col 43, \'model\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/routes/groups.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/groups.js should pass jshint', function() { 
    ok(true, 'routes/groups.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/routes/profile.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/profile.js should pass jshint', function() { 
    ok(true, 'routes/profile.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/routes/sports/add.jshint', function () {

  'use strict';

  module('JSHint - routes/sports');
  test('routes/sports/add.js should pass jshint', function() { 
    ok(false, 'routes/sports/add.js should pass jshint.\nroutes/sports/add.js: line 1, col 16, \'Ember\' is not defined.\nroutes/sports/add.js: line 3, col 43, \'model\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/routes/sports.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/sports.js should pass jshint', function() { 
    ok(true, 'routes/sports.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/routes/videos/add.jshint', function () {

  'use strict';

  module('JSHint - routes/videos');
  test('routes/videos/add.js should pass jshint', function() { 
    ok(false, 'routes/videos/add.js should pass jshint.\nroutes/videos/add.js: line 1, col 16, \'Ember\' is not defined.\nroutes/videos/add.js: line 3, col 43, \'model\' is defined but never used.\n\n2 errors'); 
  });

});
define('mytrainr-frontend/tests/routes/videos.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/videos.js should pass jshint', function() { 
    ok(true, 'routes/videos.js should pass jshint.'); 
  });

});
define('mytrainr-frontend/tests/test-helper', ['mytrainr-frontend/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('mytrainr-frontend/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('mytrainr-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'mytrainr-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("mytrainr-frontend/tests/test-helper");
} else {
  require("mytrainr-frontend/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true,"name":"mytrainr-frontend","version":"0.0.0+ff2019d3"});
}

/* jshint ignore:end */
//# sourceMappingURL=mytrainr-frontend.map