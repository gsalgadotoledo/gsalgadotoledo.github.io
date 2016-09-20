import React from 'react';

class Footer extends React.Component {
	
	render() {
		return (
			<div id="f">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 col-md-offset-2 centered">
		          <p className="mt">
		            <a href="https://github.com/gsalgadotoledo"><i className="ion-social-github"></i></a>
		            <a href="https://www.linkedin.com/in/gustavoenriquesalgadotoledo"><i className="ion-social-linkedin"></i></a>
		            <a href="mailto:gsalgadotoledo@gmail.com"><i className="ion-paper-airplane"></i></a>
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		);
	}
}

export default Footer