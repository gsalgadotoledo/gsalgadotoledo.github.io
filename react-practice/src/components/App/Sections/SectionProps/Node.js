import React from 'react';

class Node extends React.Component {
	render() {
		return React.createElement(this.props.tagName, Object.assign({}, this.props.attrs), this.props.label)
	}
}

Node.defaultProps = {
	attrs: {},
	label: 'Label of new element',
	tagName: 'div'
}

export default Node