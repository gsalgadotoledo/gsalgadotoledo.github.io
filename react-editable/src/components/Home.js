import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Home = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div>
	    	<section id="home"></section>
				<div id="h">
			    <div className="container">
			    <div className="row">
			      <h1 contentEditable={editable}>Our Book Is Here</h1>
			      <hr className="aligncenter" />
			      <h3 contentEditable={editable}>2014 Design & Code Review</h3>
			    </div>
			    </div>
				</div>
	    </div>
		);
	}
});

export default Home