import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Footer = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div id="f">
	      <div className="container">
	        <div className="row mtb">
	        <div className="col-lg-6 col-lg-offset-3">
	          <p contentEditable={editable} className="centered mb">Register To Our Newsletter</p>
	          <form role="form" action="#"> 
              <input type="email" name="email" className="subscribe-input" placeholder="your@email.com" required />
	            <button className="btn btn-lg btn-contact subscribe-submit" type="submit">Subscribe</button>
	          </form>
	        </div>
	        </div>
	      </div>
	    </div>
		);
	}
});

export default Footer