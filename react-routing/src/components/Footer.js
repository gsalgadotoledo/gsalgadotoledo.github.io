import React from 'react';

class Footer extends React.Component {
	
	render() {
		return (
			<section id="contact" name="contact">
	      <div id="f">
	        <div className="container">
	          <div className="row">
	            <div className="social-icons centered mt">
	              <a target="_blank" href="https://github.com/gsalgadotoledo"><i className="fa fa-github"></i></a>
	              <a target="_blank" href="https://www.linkedin.com/in/gustavoenriquesalgadotoledo"><i className="fa fa-linkedin"></i></a>
	              <a href="mailto:gsalgadotoledo@gmail.com"><i className="fa fa-envelope"></i></a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
		);
	}
}

export default Footer