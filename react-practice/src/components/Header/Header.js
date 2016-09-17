import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <a className="navbar-brand" href="#">React Playground</a>
	        </div>
	        <div id="navbar">
	          <ul className="nav navbar-nav">
	            <li><a href="#home-container">Top</a></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
		);
	}
}

export default Header