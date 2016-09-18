import React from 'react';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class TaskList extends React.Component {

  render() {
    return (<div className="col-md-offset-3 col-md-6 mt">
      <CSSTransitionGroup 
        transitionName="fade" 
        transitionAppear={false} 
        transitionEnterTimeout={500} 
        transitionAppearTimeout={500} 
        transitionLeaveTimeout={500}>
          {this.props.tasks.map((task, index) => {
            return <div key={index}>
              <h4>
                <input 
                  type="checkbox" 
                  ref={task.done} 
                  onChange={this.props._handleDone.bind(this, index)} 
                  checked={!!task.done}
                />
                {' '}
                <span style={task.done ? {textDecoration: 'line-through', fontStyle: 'italic'} : {}}>{task.name}</span> 
                <button type="button" className="btn-link pull-right" onClick={this.props._handleDeleteItem.bind(this, index)}>Remove</button></h4>
            </div>
          })}
      </CSSTransitionGroup>
    </div>)
  }
}
export default TaskList