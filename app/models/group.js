import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	type: DS.attr(),
	sport_id: DS.attr(),

});
