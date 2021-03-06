import config from '../config/environment';
import LeafletInitializer from 'ember-quickstart2151-import/initializers/leaflet';

// Override initializer to pass into it baseUrl from config/environment.js.
let originalInitialize = LeafletInitializer.initialize;
LeafletInitializer.initialize = function(application) {
  originalInitialize.call(this, application, Ember.get(config, 'baseURL'));
};

export default LeafletInitializer;
