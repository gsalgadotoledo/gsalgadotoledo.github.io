import React from 'react';

class SectionHeader extends React.Component {
  
  render() {
		return (
			<div className="section-header">
				<em className="text-muted text-left">
					<h1>{this.props.title}</h1>
					<p>{this.props.description}</p>
				</em>
				<hr/>
			</div>
		)
	}
}
export default SectionHeader