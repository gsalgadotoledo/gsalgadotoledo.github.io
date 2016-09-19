import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var About = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div>
    	  <section id="about"></section>
			  <div id="w">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-6 col-md-offset-3 centered">
			          <h4 contentEditable={editable}>WHY WE ARE SO AMAZING?</h4>
			        </div>
			      </div>
			      
			      <div className="row">
			        <div className="col-md-8 col-md-offset-2 centered mt">
			          <p contentEditable={editable}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley of type and scrambled it to make a type specimen book.</p>
			        </div>
			      </div>
			      
			      <div className="row centered mt">
			          <i className="ion-ios-bookmarks-outline"></i>
			      </div>
			      <div className="row">
			        <div className="col-md-6">
			          <p className="introduction" contentEditable={editable}>C</p><p className="text" contentEditable={editable}>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
			        </div>
			        
			        <div className="col-md-6">
			          <p className="introduction" contentEditable={editable}>L</p><p className="text" contentEditable={editable}>orem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
			        </div>
			      </div>
			      <div className="row">
			        <div className="col-md-10 col-md-offset-1 centered mt">
			          <img className="img-responsive" src="assets/img/book.png" alt="" />
			        </div>
			      </div>
			    </div>
			  </div>
	    </div>
		);
	}
});

export default About