import React from 'react';
import Reflux from 'reflux';
import JobsStore from '../stores/JobsStore';
import JobActions from '../actions/JobActions';
import Loading from '../components/Loading';

var Experience = React.createClass({
	
	mixins: [Reflux.connect(JobsStore, 'jobList')],

  componentWillMount: function() {
    JobActions.getJobs();
  },

  getDefaultProps: function() {
    return {
    	labelProjects: 'Some of the most important projects are listed below:'
    }
  },

	render: function() {
		if(this.state.jobList) {
			return (
				<div>
				  {this.state.jobList.map((job, index) => {
          	return <div key={index} className="mb">
            	<img src={job.image} className="img-circle" height="60" />
	            <h5>{job.title}</h5>
	            <div>{job.description}</div>
	            <p className="mb"><em>{this.props.labelProjects}</em></p>
		        		{job.projects.map((project, index) => {
			          	return <div key={index} className="mb">
			            	<h6>{project.title}</h6>
				            <div>{project.description}</div>
				          </div>
			          })}
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
export default Experience;