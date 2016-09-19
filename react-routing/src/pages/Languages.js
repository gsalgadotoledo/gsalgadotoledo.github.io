import React from 'react';
import Reflux from 'reflux';
import JobsStore from '../stores/JobsStore';
import JobActions from '../actions/JobActions';
import Loading from '../components/Loading';

var Languages = React.createClass({
	
	mixins: [Reflux.connect(JobsStore, 'langList')],

  componentWillMount: function() {
    JobActions.getLanguages();
  },

	render: function() {
		if(this.state.langList) {
			return (
				<div>
					{this.state.langList.map((lang, index) => {
          	return <div key={index} className="mb">
            	<h4>{lang.title}</h4>
	            <p><em className="text-muted">{lang.level}</em></p>
            </div>
          })}
          <div className="mt">
            <a target="_blank" href="https://www.linkedin.com/in/gustavoenriquesalgadotoledo" className="btn btn-lg btn-dark">See more about me</a>
          </div>
	      </div>
			);
		} else {
			return (<Loading />);
		}
	}
})
export default Languages;