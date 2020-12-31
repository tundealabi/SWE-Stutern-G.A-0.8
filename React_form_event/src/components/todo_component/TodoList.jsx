import React, { Component } from 'react';
import Todo from './Todo.jsx';
import NewTodoForm from './NewTodoForm.jsx';
import todosData from './todos';

class TodoList extends Component {
    state = {
        todos: todosData,
        title: "",
        description: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.length >= 3 && this.state.description.length >= 10){
            const newTodo = {
                id: Date.now(),
                title: this.state.title,
                description: this.state.description,
                completed: false
            }
            this.setState(prevState=>{
                return {
                    todos : [...prevState.todos,newTodo],
                    title: "",
                    description: ""
                }
            })
        }else alert("Invalid data");
        
    }
    handleChange = (e) => {
        const {type,name,value,dataset:{id}} = e.target;
        if(type === 'checkbox'){
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
        }else{
            this.setState({
                [name] : value
            })
        }
    }
    handleClick = (id) => {
        this.setState(prevState=>{
            prevState.todos.splice(prevState.todos.findIndex(todo=>todo.id == id),1);
            return {
                todos: [...prevState.todos]
            }
        })
    }
    render(){
        return(
            <div>
                <h2>Todo Application</h2>
                <NewTodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} stateTitle={this.state.title} stateDesc={this.state.description}/>
                {this.state.todos.map(todo=> <Todo key={todo.id} todoData={todo} handleChange={this.handleChange} handleClick={this.handleClick}/>)}
            </div>
        )
    }
}

export default TodoList;