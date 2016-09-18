import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import TaskList from './TaskList';
import TaskAdd from './TaskAdd';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
      taskToAdd: ''
    };
    this._updateNameItem = this._updateNameItem.bind(this);
    this._handleAddItem = this._handleAddItem.bind(this);
    this._handleDeleteItem = this._handleDeleteItem.bind(this);
    this._handleDone = this._handleDone.bind(this);
  }

  // Handle events
  _updateNameItem(e) {
    this.setState({
      taskToAdd: e.target.value
    })
  }

  _handleAddItem(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat({ name: this.state.taskToAdd, done: false}),
      taskToAdd: ''
    })
  }

  _handleDeleteItem(index) {
    this.state.tasks.splice(index, 1);
    this.setState({
      tasks: this.state.tasks,
    });
  }

  _handleDone(index) {
    this.state.tasks[index].done = !this.state.tasks[index].done;
    this.setState({
      tasks: this.state.tasks,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
          <div className="row mtb">
            <TaskAdd 
              taskToAdd={this.state.taskToAdd}
              _handleAddItem={this._handleAddItem}
              _updateNameItem={this._updateNameItem}
            />
            <TaskList 
              tasks={this.state.tasks} 
              _handleDeleteItem={this._handleDeleteItem} 
              _handleDone={this._handleDone} 
            />
          </div>
        <Footer />
      </div>
    )
  }
}
export default App