import React from 'react';
import { IndexLink, Link } from "react-router";

class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  _handleCollapse() {
    this.setState({collapsed: !this.state.collapsed});
  }

	render() {
		const location = this.props.location || {};
		const navClass = this.state.collapsed ? 'collapse' : '';

		return (
			<section id="navbar-main">
	      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
	        <div className="container">
	          <div className="navbar-header">
	            <button type="button" className="navbar-toggle" onClick={this._handleCollapse.bind(this)}>
	              <span className="sr-only">Toggle navigation</span>
	              <span className="icon-bar"></span>
	              <span className="icon-bar"></span>
	              <span className="icon-bar"></span>
	            </button>
	            <IndexLink className="navbar-brand" to="/" onClick={this._handleCollapse.bind(this)}>GUSTAVO SALGADO</IndexLink>
	          </div>
	          <div className={'navbar-collapse ' + navClass}>
	            <ul className="nav navbar-nav navbar-right">
	            	<li className={location.pathname === '/' ? 'active' : ''}>
                	<IndexLink to="/" onClick={this._handleCollapse.bind(this)}>Home</IndexLink>
              	</li>
              	<li className={location.pathname.match(/^\/experience/) ? 'active' : ''}>
	                <Link to="experience" onClick={this._handleCollapse.bind(this)}>Experience</Link>
	              </li>
              	<li className={location.pathname.match(/^\/languages/) ? 'active' : ''}>
	                <Link to="languages" onClick={this._handleCollapse.bind(this)}>Languages</Link>
	              </li>
              	<li className={location.pathname.match(/^\/skills/) ? 'active' : ''}>
	                <Link to="skills" onClick={this._handleCollapse.bind(this)}>Skills & Endorsements</Link>
	              </li>
              	<li className={location.pathname.match(/^\/education/) ? 'active' : ''}>
	                <Link to="education" onClick={this._handleCollapse.bind(this)}>Education</Link>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </section>
		);
	}
}

export default Header