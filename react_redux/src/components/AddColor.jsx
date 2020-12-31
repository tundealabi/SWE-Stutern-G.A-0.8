import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styling from './display.css';


class AddColor extends Component {
    constructor(){
        super();
        this.state = {
            colorName: "",
            colorValue: "#ffffff",
            redirect: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.colorName.length > 2){
            const retrieve = JSON.parse(localStorage.getItem("COLORS")) || [];
            localStorage.setItem("COLORS", JSON.stringify([{
                colorName: this.state.colorName.toLowerCase(),
                colorValue: this.state.colorValue
            },...retrieve]))
            this.setState({redirect:true})
        }else alert("Title length must be greater than 2");
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            this.state.redirect ? 
            <Redirect to={'/colors'} />
        :     
         <form className={styling.form} onSubmit={this.handleSubmit}>
            <label htmlFor="colorName">Color Name:</label>
            <input
              type="text"
              maxLength="10"
              placeholder={"Enter a name for your color"}
              onChange={this.handleChange}
              name="colorName"
              id="colorName"
              value={this.state.colorName}
            />
            <label htmlFor="color">Select Color:</label>
            <input
              type="color"
              onChange={this.handleChange}
              name="colorValue"
              id="color"
              value={this.state.colorValue}
            />
            <button className="submit">
              Submit
            </button>
          </form>  
            
        )
    }
}

export default AddColor;