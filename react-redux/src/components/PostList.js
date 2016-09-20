import React from 'react';
import { fetchPosts } from "../actions/postActions"
import { connect } from "react-redux"

@connect((store) => {
	return {
    loading: store.posts.loading,
    posts: store.posts.posts
  };
})
class PostList extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		if(this.props.loading) {
			return (
				<div class="text-center mtb">Loading...</div>
			);
		}
		return (
			<div id="grey">
		    <div className="container">
		      <div className="row w">
		        {this.props.posts.map((post, index) => {
		        	const date = new Date(post.published);
		        	return (
		        		<div key={index} className="col-md-4 item">
				          <div className="image" style={{backgroundImage: `url(${post.media.m})`}}></div>
				          <div className="date">
				            <h4><bold>{date.getDate()}</bold></h4>
				            <h4>{date.getMonth()}</h4>
				          </div>
				          <h5 className="author">{post.title}...</h5>
				          <p className="desc author">Posted by <em>{post.author}</em></p>
				          <p><a target="_blank" href={post.link}>Go to flikr</a></p>
				        </div>
	        		)
		        })}
		      </div>
		    </div>
		  </div>
		);
	}
}

PostList.propTypes = { 
  loading: React.PropTypes.bool,
  posts: React.PropTypes.array
}

PostList.defaultProps = {
  loading: false,
  posts: []
}

export default PostList