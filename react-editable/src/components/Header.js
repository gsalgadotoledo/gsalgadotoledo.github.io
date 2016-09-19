import React from 'react';
import EditActions from '../actions/EditActions';

var Header = React.createClass({
	
	getInitialState: function () {
		return {
			editable: false
		}
	},

	_handleClick: function() {
		const editable = !this.state.editable;
		EditActions.enableEditable(editable);
		this.setState({editable});
	},
	
	render: function() {
		return (
			<nav className="menu" id="theMenu">
		    <div className="menu-wrap">
		      <h1 className="logo"><a href="#home">REACTJS</a></h1>
		      <i className="ion-android-close menu-close"></i>
		      <a href="#home" className="smoothScroll">Home</a>
		      <a href="#about" className="smoothScroll">About</a>
		      <a href="#features" className="smoothScroll">Features</a>
		      <a href="#testimonial" className="smoothScroll">Testimonials</a>
		      <a href="#buy" className="smoothScroll">Buy Now</a>
		    </div>
		    <div id="menuToggle" className="home-elements"><i className="ion-home"></i></div>
		    <div className="edit-elements" onClick={this._handleClick}>{this.state.editable ? 'Done' : 'Edit'}</div>
		  </nav>
		);
	}
})

export default Header