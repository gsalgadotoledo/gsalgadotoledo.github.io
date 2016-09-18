import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';

class SearchField extends React.Component {
	
	componentDidMount() {
	   ReactDOM.findDOMNode(this.refs.q).focus();
	}

	render() {
		return (
	    <div className="row mb">
        <div className="col-md-12">
      		<form onSubmit={this.props._handleSubmit.bind(this)}>
	  				<input type="text" ref="q" name="q" className="search-form" placeholder="Type your search... and enter" required />
					</form>
      	</div>
      </div>
    );
	}
}

export default SearchField;