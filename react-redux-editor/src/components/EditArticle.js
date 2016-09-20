import React from 'react';
import { connect } from 'react-redux'
import { updateArticle } from '../actions/articleActions'
import UserProfile from './UserProfile';

@connect((store) => {
  return {
    article: store.article
  };
})
class EditArticle extends React.Component {
	
	_handleClick(param) {
		this.props.dispatch(updateArticle(param, this.refs[param].value));
	}

	render() {
		return (
			<div className="col-sm-6 section-bg-color">
        <UserProfile uuid={this.props.article.uuid} name={this.props.article.author} />
        <hr />
        <h1>
          <input 
            type="text" 
            ref="title" 
            onChange={this._handleClick.bind(this, 'title')} 
            value={this.props.article.title} 
            className="form-control" 
          />
        </h1>
        <h3>
          <textarea 
            value={this.props.article.preview} 
            ref="preview" 
            onChange={this._handleClick.bind(this, 'preview')} 
            className="form-control" 
            rows="3" 
          />
        </h3>
        <hr className="blog" />
        <p className="hidden-sm">
          <textarea 
            value={this.props.article.content} 
            ref="content" 
            onChange={this._handleClick.bind(this, 'content')} 
            className="form-control" 
            rows="6" 
          />
        </p>
        <p className="mt">
          <input 
            ref="labelButton" 
            onChange={this._handleClick.bind(this, 'labelButton')} 
            type="text" 
            value={this.props.article.labelButton} 
            className="form-control" 
          />
          <input 
            ref="linkButton" 
            onChange={this._handleClick.bind(this, 'linkButton')} 
            type="text" value={this.props.article.linkButton} 
            className="form-control" 
          />
        </p>
	    </div>
		);
	}
}

EditArticle.propTypes = { 
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

EditArticle.defaultProps = {
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

export default EditArticle