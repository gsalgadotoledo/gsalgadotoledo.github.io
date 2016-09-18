import React from 'react';

class TaskAdd extends React.Component {

  render() {
    return (<div className="col-md-offset-3 col-md-6 mt">
      <form className="form-add" onSubmit={this.props._handleAddItem}> 
        <input 
          value={this.props.taskToAdd || ''}
          onChange={this.props._updateNameItem}
          type="text" 
          className="form-control"  
          placeholder="Add a new task and press enter..." 
          required
        />
        <button className='btn btn-green' type="submit">Add</button>
      </form>
    </div>);
  }
}
export default TaskAdd