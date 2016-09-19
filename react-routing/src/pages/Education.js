import React from 'react';
import Reflux from 'reflux';
import JobsStore from '../stores/JobsStore';
import JobActions from '../actions/JobActions';
import Loading from '../components/Loading';

var Education = React.createClass({
	
	mixins: [Reflux.connect(JobsStore, 'langEducation')],

  componentWillMount: function() {
    JobActions.getEducation();
  },

	render: function() {
		if(this.state.langEducation) {
			return (
				<div>
				  {this.state.langEducation.map((education, index) => {
          	return <div key={index}>
              <h4>{education.title}</h4>
              <p className="hidden-sm">{education.degree}</p>
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
export default Education;