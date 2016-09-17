import React from 'react';

class SectionAddItems extends React.Component {

	constructor() {
		super();
		this.state = {
			listItems: ['Default value...'],
			newItem: ''
		};
		this._updateNameItem = this._updateNameItem.bind(this);
		this._handleAddItem = this._handleAddItem.bind(this);
		this._handleDeleteItem = this._handleDeleteItem.bind(this);
	}

	// Handle events
	_updateNameItem(e) {
		this.setState({
			newItem: e.target.value
		})
	}

	_handleAddItem(e) {
		e.preventDefault();
		this.setState({
			listItems: [this.state.newItem].concat(this.state.listItems),
			newItem: ''
		})
	}

	_handleDeleteItem(index) {
		this.state.listItems.splice(index, 1);
		this.setState({
			listItems: this.state.listItems,
		});
	}

	render() {
		return (
			<div id="creating-elements-container">
				<div className="list-group">
					{this.state.listItems.map((name, index) => {
						return <div key={index} className="list-group-item clearfix">
							<span className="list-group-item-heading">{name} <button type="button" className="btn btn-danger pull-right" onClick={this._handleDeleteItem.bind(this, index)}>Remove</button></span>
					  </div>
					})}
				</div>
				<div className="clearfix btn-actions">
					<form onSubmit={this._handleAddItem} className="form-inline">
					  <div className="form-group">
					    <input 
					      value={this.state.newItem || ''}
								onChange={this._updateNameItem}
					      type="text" 
					      className="form-control"  
					      placeholder="New item..." 
					    />
					  </div>
					  <button type="submit" className="btn btn-primary margin-left">Add</button>
					</form>
				</div>
			</div>
		)
	}
}
export default SectionAddItems