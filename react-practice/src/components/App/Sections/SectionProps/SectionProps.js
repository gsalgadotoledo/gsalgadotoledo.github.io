import React from 'react';
import Node from './Node';

class SectionProps extends React.Component {

	render() {
		return (
			<div id="props-container">
				<Node tagName="h1" label="Created by setting props to dynamic component" />
				<Node tagName="h2" label="Created by setting props to dynamic component" />
				<Node tagName="h3" label="Created by setting props to dynamic component" />
				<Node tagName="h4" label="Created by setting props to dynamic component" />
				<Node tagName="h5" label="Created by setting props to dynamic component" />
				<Node tagName="h6" label="Created by setting props to dynamic component" />
				<Node tagName="span" label="Default" attrs={{className: 'label label-default'}} /> 
				<Node tagName="span" label="Primary" attrs={{className: 'label label-primary'}} /> 
				<Node tagName="span" label="Success" attrs={{className: 'label label-success'}} /> 
				<Node tagName="span" label="Info" attrs={{className: 'label label-info'}} /> 
				<Node tagName="span" label="Warning" attrs={{className: 'label label-warning'}} /> 
				<Node tagName="span" label="Danger" attrs={{className: 'label label-danger'}} />
			</div>
		)
	}
}

export default SectionProps