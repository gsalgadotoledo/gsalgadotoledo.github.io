import React from 'react';

class Header extends React.Component {
	
	render() {
		return (
			<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
	      <div className="container">
	        <div className="navbar-header">
	          <a className="navbar-brand" href="#">FLUX</a>
	        </div>
	      </div>
	    </div>
		);
	}
}

export default Header