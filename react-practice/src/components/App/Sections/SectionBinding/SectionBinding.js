import React from 'react';
import ChildDiv from './ChildDiv';

class SectionBinding extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			myName: 'This is a data binding test...',
			classColor: ''
		};
		this.textOptionsList = ['Italic', 'Uppercase', 'Lowercase', 'Bold', 'Light', 'Done', 'Danger', 'Warning', 'Success'];
		this._updateChange = this._updateChange.bind(this);
		this._handleClick = this._handleClick.bind(this);
	}

	// Handle events
	_updateChange(e) {
		this.setState({
			myName: e.target.value
		})
	}

	_handleClick(name) {
		this.setState({
			classColor: 'text-' + name.toLowerCase(),
		});
	}

	render() {
		return (
			<div id="binding-container">
				<div className="row">
					<div className="clearfix btn-actions btn-text-actions col-md-12">
						{this.textOptionsList.map((name, index) => {
							return <button 
								key={index} 
								type="button" 
								onClick={this._handleClick.bind(this, name)}
								className={'text-' + name.toLowerCase() + ' btn btn-default'}>{name}</button>
						})}
					</div>
					<ChildDiv name={this.state.myName} classText={this.state.classColor}/>
					<ChildDiv name={this.state.myName} classText={this.state.classColor}/>
					<ChildDiv name={this.state.myName} classText={this.state.classColor}/>
					<div className="col-md-4">
						<div className="form-group">
					    <input 
					      value={this.state.myName}
								onChange={this._updateChange}
					      type="text" 
					      className="form-control"  
					      placeholder="Type something..." 
					    />
					  </div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
					    <input 
					      value={this.state.myName}
								onChange={this._updateChange}
					      type="text" 
					      className="form-control"  
					      placeholder="Type something..." 
					    />
					  </div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
					    <input 
					      value={this.state.myName}
								onChange={this._updateChange}
					      type="text" 
					      className="form-control"  
					      placeholder="Type something..." 
					    />
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default SectionBinding