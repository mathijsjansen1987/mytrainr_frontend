import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
export default DS.RESTAdapter.extend(DataAdapterMixin,{
  host: 'http://dev.code.rehab/mytrainr_backend',
  namespace: 'api/v1',
  authorizer: 'authorizer:oauth2'
});
