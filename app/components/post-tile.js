import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions:{
    delete(post){
      if (confirm('you sure?')){
        this.sendAction('destroyPost', post);
      }
    },
    update(post, params) {
      debugger;
      this.sendAction('update', post, params);
    }
  }
});
