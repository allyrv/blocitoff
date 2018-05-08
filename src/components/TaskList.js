import React, { Component } from 'react';
import '../App.css';
import * as firebase from 'firebase';

class TaskList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
       name:''
    };
     this.tasksRef = this.props.firebase.database().ref('Tasks');
     this.createNewTask = this.createNewTask.bind(this);
     this._taskChange = this._taskChange.bind(this)
  };

  componentDidMount() {
    this.tasksRef.on('child_added', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key;
      this.setState({ tasks: this.state.tasks.concat( task ) })
    });
  }

  _taskChange (e) {
  e.preventDefault();
  this.setState({name: e.target.value})
}

  createNewTask (e) {
    e.preventDefault()
    this.tasksRef.push({
      name: this.state.name
    });
    this.setState({name: ''})
  }

  render() {
    let taskList = this.state.tasks.map((task, index) =>
      <li key={task.key}>{task.name}</li>);

    let taskForm = (
        <form onSubmit={this.createNewTask}>
          <h2>Add a new task</h2>
          <input type="text" value={this.state.name} placeholder="Task Name" onChange = {this._taskChange} />
          <input type="submit" value="Submit"/>
        </form>
      )

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> List of Tasks</h1>
        </header>
        <div>
          <ul>{taskForm}</ul>
          <ul>{taskList}</ul>
        </div>
      </div>
    );
  }
}

export default TaskList;