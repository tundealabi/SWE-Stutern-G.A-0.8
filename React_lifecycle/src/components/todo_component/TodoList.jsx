import React, { Component } from 'react';
import Todo from './Todo.jsx';
import NewTodoForm from './NewTodoForm.jsx';

class TodoList extends Component {
    state = {
        todos: [],
        title: "",
        description: "",
        editing: {status:false,id:""},
        localStorage:false
    }
    componentDidMount(){
        this.setState({todos:JSON.parse(localStorage.getItem("TODOS")) || []})
    }
    componentDidUpdate(prevProp,prevState){
        if(prevState.localStorage != this.state.localStorage){
            localStorage.setItem("TODOS", JSON.stringify(this.state.todos));
            this.setState({localStorage:false})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.length >= 3 && this.state.description.length >= 10){
            if(this.state.editing.status){
                this.setState(prevState=>{
                    prevState.todos[prevState.editing.id].title = this.state.title;
                    prevState.todos[prevState.editing.id].description = this.state.description;
                    return {
                        todos: prevState.todos,
                        title: "",
                        description: "",
                        editing:{status:false,id:""},
                        localStorage:true
                    }
                })
                return;
            }
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
                    description: "",
                    localStorage:true
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
                   }),
                   localStorage:true
                } 
              })
        }else{
            this.setState({
                [name] : value
            })
        }
    }
    handleClick = (id,edit) => {
        let index = this.state.todos.findIndex(todo=>todo.id == id)
        if(edit){
            this.setState({
                title: this.state.todos[index].title,
                description: this.state.todos[index].description,
                editing:{status:true,id:index}
            })
            return;
        }
        this.setState(prevState=>{
            prevState.todos.splice(index,1);
            return {
                todos: [...prevState.todos],
                localStorage:true
            }
        })
    }
    render(){
        return(
            <div>
                <h2>Todo Application</h2>
                <NewTodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} stateTitle={this.state.title} stateDesc={this.state.description}/>
                {
                this.state.todos.length ? 
                this.state.todos.map(todo=> <Todo key={todo.id} todoData={todo} editStatus={this.state.editing.status} handleChange={this.handleChange} handleClick={this.handleClick}/>)
                    :
                    <h3>There are no todos</h3>
                }
            </div>
        )
    }
}

export default TodoList;