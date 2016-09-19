import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Buy = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div>
	    	<section id="buy"></section>
			  <div id="g">
			    <div className="container">
			      <div className="row">
			      <div className="col-md-6 col-md-offset-3 centered">
			        <h4 contentEditable={editable}>GRAB OUR BOOK NOW</h4>
			      </div>      
			      </div>
			      
			      <div className="row mt">
			        <div className="col-md-6 col-md-offset-3 centered">
			        <p className="price"><i className="ion-bag"></i></p>
			        <p className="mb" contentEditable={editable}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
			        <p><price contentEditable={editable}>21</price></p>
			        <h5 contentEditable={editable}>U.S. DOLLARS</h5>
			        <p className="mt"><button className="btn btn-lg btn-theme" contentEditable={editable}>BUY IT NOW</button></p>
			        </div>
			      </div>
			    </div>
			  </div>
	    </div>
		);
	}
});

export default Buy