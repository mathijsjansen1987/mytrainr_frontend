import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	emailaddress: DS.attr(),
	password: DS.attr(),
});
