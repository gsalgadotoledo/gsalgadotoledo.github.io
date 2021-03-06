import Reflux from 'reflux';
import $ from 'jquery';
import SearchActions from '../actions/SearchActions';

var SearchStore = Reflux.createStore({
    listenables: [SearchActions],
    results: [],

    init: function() {
        this.retriveLinks();
    },

    retriveLinks: function(query) {

      if(query) {
        this.trigger({links: this.results, searching: true});
        $.ajax({
            url: `https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=${query}`,
            dataType: 'jsonp',
            cache: false,
            context: this,
            success: function(data) {
              this.results = data.responseData.entries;
              this.trigger({links: this.results, searching: false});
            }
        });
      }
    }
});

export default SearchStore;