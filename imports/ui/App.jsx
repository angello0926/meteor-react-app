import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hideCompleted: false
        };
    }
    handleSubmit(event){
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert ({
            text,
            createdAt: new Date()
        });

        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
    toggleState(){
        this.setState({ hideCompleted :!this.state.hideCompleted });
    }
    renderTasks(){
        console.log(this.props);
        let filteredTasks = this.props.tasks;
        if(this.state.hideCompleted){
            filteredTasks = filteredTasks.filter(task => !task.checked);
        }
        return filteredTasks.map ((task) => (
            <Task key ={task._id} task={task} />
        ));
    }
    render(){

        return (
            <div className="container">
                <header>
                    <h1>Todo List ({this.props.incompleteCount})</h1>
                </header>
                <label className="hide-complete">
                    <input type="checkbox" readOnly checked={this.state.hideCompleted} onClick={this.toggleState.bind(this)} />
                    <span>Hide Completed</span>
                </label>
                {{> loginButtons}}
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="type" ref="textInput" placeholder="Type to add new Tasks" />
                </form>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired

};

export default createContainer(()=> {
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
}, App);