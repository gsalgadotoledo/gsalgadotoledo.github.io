import React from 'react'
import { fetchPosts } from '../actions/postActions'
import { connect } from 'react-redux'

@connect((store) => {
	return {
		about: store.posts.about
	}
})
class Header extends React.Component {
	
	_handleClick() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		return (
  		<div>
		  	<section id="contact"></section>
			  <div className="container">
			    <div className="row mtb2">
			      <div className="col-md-8 col-md-offset-2 centered">
			        <h6>WE LOVE TO USE REACTJS</h6>
			        <h2 className="bold mb">Flickr posts using Redux <br /> about  <big><em>#{this.props.about}</em></big></h2>
			        <button onClick={this._handleClick.bind(this)} className="btn btn-conf btn-green">Give me latest</button>
			      </div>
			    </div>
			  </div>
		  </div>
		);
	}
}

Header.propTypes = { 
  about: React.PropTypes.string
}

Header.defaultProps = {
  about: '...'
}

export default Header