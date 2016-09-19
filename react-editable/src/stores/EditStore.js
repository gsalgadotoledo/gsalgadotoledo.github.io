import Reflux from 'reflux';
import EditActions from '../actions/EditActions';
// import $ from 'jquery';

var EditStore = Reflux.createStore({
    
    listenables: [EditActions],

    init: function() {
      this.enableEditable();
    },

    enableEditable: function(editable) {
      this.trigger(editable);
      /**
        *
        if(!editable) {
          // @TODO Show a UI loading animation
          $.ajax({
              url: 'url to update',
              dataType: 'jsonp',
              cache: false,
              context: this,
              success: function(data) { 
                // @TODO Hide the UI loading animation
              }
          });
        }
      */
    }
});

export default EditStore;