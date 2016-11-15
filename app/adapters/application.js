import DS from 'ember-data';
import environment from 'recipe/config/environment';
export default DS.JSONAPIAdapter.extend({
    host: environment.API.host,
    namespace: environment.API.namespace,
    shouldReloadAll: () => true

});