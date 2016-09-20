import React from 'react';
import { connect } from 'react-redux'
import UserProfile from './UserProfile';

@connect((store) => {
  return {
    article: store.article
  };
})
class ViewArticle extends React.Component {

	render() {
		return (
			<div className="col-sm-6 section-bg-color">
        <UserProfile uuid={this.props.article.uuid} name={this.props.article.author} />
        <hr />
        <h1>{this.props.article.title}</h1>
        <h3>{this.props.article.preview}</h3>
        <hr className="blog" />
        <p className="hidden-sm">{this.props.article.content}</p>
        <p className="mt"><a href={this.props.article.linkButton} className="btn btn-conf btn-theme">{this.props.article.labelButton}</a></p>
      </div>
		);
	}
}

ViewArticle.propTypes = { 
  article: React.PropTypes.shape({
    uuid: React.PropTypes.string,
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    preview: React.PropTypes.string,
    content: React.PropTypes.string,
    labelButton: React.PropTypes.string,
    linkButton: React.PropTypes.string
  })
};

ViewArticle.defaultProps = {
  article: {
    uuid: '',
    author: '',
    title: '',
    preview: '',
    content: '',
    labelButton: '',
    linkButton: ''
  }
}

export default ViewArticle