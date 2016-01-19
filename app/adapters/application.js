import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://dev.code.rehab/mytrainr_backend',
  namespace: 'api/v1'
});
