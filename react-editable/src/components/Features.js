import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Features = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div>
    	  <section id="features"></section>
			  <div id="g">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-6 col-md-offset-3 centered">
			          <h4 contentEditable={editable}>WHAT YOU CAN FIND INSIDE?</h4>
			        </div>
			      </div>
			      
			      <div className="row mt centered">
			        <div className="col-md-4">
			          <i className="ion-beaker"></i>
			          <h5 contentEditable={editable}>CODE</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-bookmark"></i>
			          <h5 contentEditable={editable}>BOOKMARK</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-camera"></i>
			          <h5 contentEditable={editable}>CAMERA</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>        
			        </div>
			      </div>
			      
			      <div className="row mt centered">
			        <div className="col-md-4">
			          <i className="ion-clipboard"></i>
			          <h5 contentEditable={editable}>CLIPBOARD</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-compass"></i>
			          <h5 contentEditable={editable}>COMPASS</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-document"></i>
			          <h5 contentEditable={editable}>DOCUMENT</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>        
			        </div>
			      </div>

			      <div className="row mt centered">
			        <div className="col-md-4">
			          <i className="ion-earth"></i>
			          <h5 contentEditable={editable}>EARTH</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-eye"></i>
			          <h5 contentEditable={editable}>EYE</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			        </div>
			        <div className="col-md-4">
			          <i className="ion-heart"></i>
			          <h5 contentEditable={editable}>HEART</h5>
			          <p className="desc" contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>        
			        </div>
			      </div>
			    </div>
			  </div>
	    </div>
		);
	}
});

export default Features