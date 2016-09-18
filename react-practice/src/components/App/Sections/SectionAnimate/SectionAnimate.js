import React from 'react';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class SectionAnimate extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		};
		this._handleToogle = this._handleToogle.bind(this);
	}

	_handleToogle() {
		this.setState({visible: !this.state.visible});
	}

	render() {
		var componentToShow;
		if(this.state.visible) {
			componentToShow = <h2 class="fade">Hello animation...</h2>;
		}

		return (
			<div>
				<button className="btn btn-default" onClick={this._handleToogle}>Toggle animation</button>
				<CSSTransitionGroup 
					transitionName="fade" 
					transitionAppear={true} 
					transitionEnterTimeout={500} 
					transitionAppearTimeout={500} 
					transitionLeaveTimeout={500}>
					{componentToShow}
				</CSSTransitionGroup>
			</div>
		);
	}
}

export default SectionAnimate