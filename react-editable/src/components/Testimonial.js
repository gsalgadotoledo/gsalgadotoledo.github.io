import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Testimonial = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div>
    	  <section id="testimonial"></section>
		    <div id="w">
		      <div className="container">
		      <div className="row">
		        <div className="col-md-6 col-md-offset-3 centered">
		          <h4 contentEditable={editable}>WANT AN HONEST TESTIMONIAL?</h4>
		        </div>      
		      </div>
		      
		      <div className="row mt">
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-02.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>Lisa Smith</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
		        </div>
		        
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-03.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>David Brown</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>
		        </div>
		      </div>

		      <div className="row mt">
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-01.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>Mark Snow</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
		        </div>
		        
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-04.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>Karen Schultz</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
		        </div>
		      </div>

		      <div className="row mt">
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-02.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>Lisa Smith</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
		        </div>
		        
		        <div className="col-md-2">
		          <p className="testimonial" contentEditable={editable}><img src="assets/img/ui-03.jpg" className="img-circle aligncenter" alt="" width="60" /></p>
		          <h6 className="centered" contentEditable={editable}>David Brown</h6>
		        </div>
		        <div className="col-md-4">
		          <p className="testimonial" contentEditable={editable}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>
		        </div>
		      </div>
		      
		      <div className="row mt">
		        <div className="col-md-4 col-md-offset-4 centered">
		          <button className="btn btn-lg btn-theme" contentEditable={editable}>GIVE YOUR OPINION</button>
		        </div>
		      </div>
		      </div>
		    </div>
	    </div>
		);
	}
});

export default Testimonial