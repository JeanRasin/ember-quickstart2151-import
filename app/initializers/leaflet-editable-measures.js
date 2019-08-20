import config from '../config/environment';
import LeafletEditableMeasuresInitializer from 'ember-quickstart2151-import/initializers/leaflet-editable-measures';

// Override initializer to pass into it baseUrl from config/environment.js.
let originalInitialize = LeafletEditableMeasuresInitializer.initialize;
LeafletEditableMeasuresInitializer.initialize = function(application) {
  originalInitialize.call(this, application, Ember.get(config, 'baseURL'));
};

export default LeafletEditableMeasuresInitializer;
