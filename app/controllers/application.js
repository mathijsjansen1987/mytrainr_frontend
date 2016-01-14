export default Ember.Controller.extend({
  // the initial value of the `search` property
  search: '',

  actions: {
    query() {
      // the current value of the text field
      var query = this.get('search');
      this.transitionToRoute('search', { query });
    }
  }
});
