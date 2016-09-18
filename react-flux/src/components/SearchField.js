import React from 'react';
import Reflux from 'reflux';

class SearchField extends React.Component {
	
	render() {
		return (
	    <div className="row mb">
        <div className="col-md-12">
      		<form onSubmit={this.props._handleSubmit.bind(this)}>
	  				<input type="text" name="q" className="search-form" placeholder="Type your search... and enter" required />
					</form>
      	</div>
      </div>
    );
	}
}

export default SearchField;