import Reflux from 'reflux';
import $ from 'jquery';
import JobActions from '../actions/JobActions';

var JobsStore = Reflux.createStore({
    listenables: [JobActions],

    getJobs: function() {
      this.getCallAjax('jobs');
    },

    getLanguages: function() {
      this.getCallAjax('languages');
    },

    getSkills: function() {
      this.getCallAjax('skills');
    },

    getEducation: function() {
      this.getCallAjax('education');
    },

    getCallAjax: function(endpoint) {
      $.ajax({
        url: `data/${endpoint}.json`,
        dataType: 'json',
        cache: false,
        context: this,
        success: function(data) {
          this.trigger(data.items || []);
        }
      });
    }
});

export default JobsStore;