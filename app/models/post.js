import DS from 'ember-data';

export default DS.Model.extend({
  pseudonym: DS.attr(),
  image: DS.attr(),
  topic: DS.attr(),
  body: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  // tag: DS.hasMany('tag', {async: true })
});
