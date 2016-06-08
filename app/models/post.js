import Model from 'ember-data/model';

export default Model.extend({
  pseudonym: DS.attr(),
  image: DS.attr(),
  topic: DS.attr(),
  body: DS.attr()
});
