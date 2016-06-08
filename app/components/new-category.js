import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },
    saveCategory() {
     var params = {
       name: this.get('name'),
     };
     this.set('addNewCategory', false);
     this.sendAction('saveCategory', params);
   }
  }
});
