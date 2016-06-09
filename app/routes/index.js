import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'posts', model.posts);
    Ember.set(controller, 'categories', model.categories);
  },

  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
    save(params) {
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      debugger;
      category.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});
