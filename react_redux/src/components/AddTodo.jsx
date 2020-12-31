import React, { Component } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo, editTodo, editing } from '../redux/actions';
import styling from './display.css';


class AddTodo extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            description: "",
            localStorage: false,
            redirect: false
        }
    }
    componentDidMount(){
        const { edit } = this.props.match.params;
        if(this.props.reduxState.editing.status && edit){
            const editData = this.props.reduxState.todos.find(todo=> todo.id === this.props.reduxState.editing.id)
            this.setState({
                title: editData.title,
                description: editData.description
            });
        }
        if(!edit) this.props.editing({status:false,id:""});
        if(edit && !this.props.reduxState.editing.status) this.setState({redirect:true});
    }
    componentDidUpdate(){
            if(this.state.localStorage){
                localStorage.setItem("TODOS", JSON.stringify(this.props.reduxState.todos))
                this.setState({ redirect: true, localStorage:false })
            }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.length >= 3 && this.state.description.length >= 10){
            if(this.props.reduxState.editing.status){
                const editData = this.props.reduxState.todos.find(todo => todo.id === this.props.reduxState.editing.id)
                this.props.editTodo({...editData,title:this.state.title,description:this.state.description});
            }else{
                const newTodo = {
                    id: Date.now(),
                    title: this.state.title,
                    description: this.state.description,
                    completed: false
                }
                this.props.addTodo(newTodo);
            }
            this.setState({ localStorage: true })
        }else alert("Invalid data");
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            this.state.redirect ? 
            <Redirect to={'/todos'} />
        :     
         <form className={styling.form} onSubmit={this.handleSubmit}>
            <label htmlFor="title">Todo Title:</label>
            <input
              type="text"
              placeholder={"Enter a title for your todo"}
              onChange={this.handleChange}
              name="title"
              id="title"
              value={this.state.title}
            />
            <label htmlFor="description">Todo Description:</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.description}
            />
            <button className="submit">
              {this.props.reduxState.editing.status ? "Edit Todo" : "Add Todo"}
            </button>
          </form>  
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}

export default connect(mapStateToProps,{ addTodo, editTodo, editing })(AddTodo);