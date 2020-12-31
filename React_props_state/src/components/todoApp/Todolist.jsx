import React, { Component } from 'react';
import todosData from './todoData';
import Todo from './Todo.jsx';
import styles from './todo.css';


class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: todosData
        }
    }
    handleChange = (id) => {
       this.setState(prevState=>{
         return {
            todos: prevState.todos.map(todo=>{
                if(todo.id == id){
                     return {...todo,completed:!todo.completed}
                }
                return todo;
            })
         } 
       })
    }
    render(){
        return(
            <div className={styles.todolist}>
                <h2 >Todo Application</h2>
                {this.state.todos.map(todo=> <Todo key={todo.id} todoData={todo} handleChange={this.handleChange}/>)}
            </div>
        )
    }
}

export default TodoList;