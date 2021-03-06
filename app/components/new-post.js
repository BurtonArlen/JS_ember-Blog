import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        pseudonym: this.get('pseudonym'),
        topic: this.get('topic'),
        body: this.get('body'),
        image: this.get('image'),
        category: this.get('category'),
        // tag: this.get('tag'),
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
