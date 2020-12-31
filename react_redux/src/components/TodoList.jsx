import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { getTodos, toggleTodo, editing, removeTodo } from '../redux/actions';
import styling from './display.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            localStorage: false
        }
    }
    componentDidMount(){
        if(this.props.reduxState.editing.status) this.props.editing({status:false,id:""});
        this.props.getTodos();
    }
    componentDidUpdate(){ 
            if(this.props.reduxState.editing.status){
                this.setState({redirect: true});
            }
            if(this.state.localStorage){
                localStorage.setItem("TODOS", JSON.stringify(this.props.reduxState.todos));
                this.setState({localStorage:false});
            } 
    }
    handleClick = (id,type) => {
        if(type === "edit"){
            this.props.editing({status:true,id});
        }else{
            this.props.removeTodo(id);
            this.setState({localStorage:true});
        }
    }
    handleChange = (id) => {
        this.props.toggleTodo(id);
        this.setState({localStorage:true})
    }
    
    render(){
        const { reduxState: { todos } } = this.props;
        return(
                this.state.redirect ? 
                <Redirect to={'/todos/new/edit'} />
            :     
            <div className={styling.todoList}>
                 <h2>Todo Application</h2>
                 <button><Link to='/todos/new'>Add a Todo</Link></button>
                {
                todos.length ? 
                todos.map(todo=> <Todo key={todo.id} todoData={todo} handleChange={this.handleChange} handleClick={this.handleClick}/>)
                    :
                    <h3>There are no todos</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state
    }
};

export default connect(mapStateToProps,{ getTodos, toggleTodo, editing, removeTodo })(TodoList);
