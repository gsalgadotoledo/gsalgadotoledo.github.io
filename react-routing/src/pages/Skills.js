import React from 'react';
import Reflux from 'reflux';
import JobsStore from '../stores/JobsStore';
import JobActions from '../actions/JobActions';
import Loading from '../components/Loading';

var Skills = React.createClass({
	
	mixins: [Reflux.connect(JobsStore, 'langSkills')],

  componentWillMount: function() {
    JobActions.getSkills();
  },

	render: function() {
		if(this.state.langSkills) {
			return (
				<div>
					<h4>Skills & Endorsements</h4>
          <ul>
          	{this.state.langSkills.map((skill, index) => {
	          	return <li key={index}>{skill.title}</li>
	          })}
          </ul>
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
export default Skills;