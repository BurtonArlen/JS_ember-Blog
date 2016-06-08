import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      category.get('post').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});
