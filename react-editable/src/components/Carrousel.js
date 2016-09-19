import React from 'react';
import Reflux from 'reflux';
import EditStore from '../stores/EditStore';

var Carrousel = React.createClass({

	mixins: [Reflux.connect(EditStore, 'editable')],

	render: function() {
		const editable = this.state.editable ? 'true' : 'false';

		return (
	    <div id="myCarousel" className="carousel slide" data-ride="carousel">
	      <ol className="carousel-indicators">
	        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
	        <li data-target="#myCarousel" data-slide-to="1"></li>
	        <li data-target="#myCarousel" data-slide-to="2"></li>
	      </ol>
	      <div className="carousel-inner centered">
	        <div className="item active centered">
	          <img src="assets/img/car01.jpg" alt="First slide" />
	        </div>
	        <div className="item centered">
	          <img src="assets/img/car02.jpg" alt="Second slide" />
	        </div>
	        <div className="item centered">
	          <img src="assets/img/car03.jpg" alt="Third slide" />
	        </div>
	      </div>
	    </div>
		);
	}
});

export default Carrousel