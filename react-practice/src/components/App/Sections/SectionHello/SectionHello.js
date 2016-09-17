import React from 'react';

class SectionHello extends React.Component {

	render() {
		return (
			<div id="hello-container">
				<div className="media">
				  <div className="media-left media-middle">
				    <a href={this.props.linkIn}>
				      <img className="img-circle img-thumbnail media-object" src={this.props.imageProfileUrl} alt={this.props.name} />
				    </a>
				  </div>
				  <div className="media-body">
				    <h4 className="media-heading">{this.props.name}</h4>
				    {this.props.expertIn} <a href={this.props.linkIn} target="_blank">{this.props.linkLabel}</a>
				  </div>
				</div>
			</div>
		)
	}
}

SectionHello.defaultProps = {
	linkIn: 'https://www.linkedin.com/in/gustavoenriquesalgadotoledo',
	imageProfileUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcWAAAAJGQ4YjRkMTU4LWMzNTAtNGNhMC04NDAwLTBlNzM0NzljZmRiMg.jpg',
	name: 'Gustavo Salgado',
	expertIn: 'JS NodeJS Developer',
	linkLabel: 'Have a look in my linkedin'
}

export default SectionHello