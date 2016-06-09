import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category')
    });
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
