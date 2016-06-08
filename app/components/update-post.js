import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        pseudonym: this.get('pseudonym'),
        topic: this.get('topic'),
        body: this.get('body'),
        image: this.get('image'),
        category: this.get('category')
        // tag: this.get('tag'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
