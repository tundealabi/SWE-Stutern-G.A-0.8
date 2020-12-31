import React, { Component } from 'react';
import CustomLink from './CustomLink.jsx';
import data from './linkData';

class Link extends Component {
    constructor(){
        super();
        this.state = {disabled:false}
    }
    handleClick = (e) => {
        if(this.state.disabled){
            e.preventDefault();
            alert("Sorry link has been disabled");
        }
    } 
    
    handleSwitch = () =>{
        this.setState(prevState=>{
            return {
                disabled: !prevState.disabled
            };
        });
    }
    render(){
        return(
            <div>
                <h2>Link Application</h2>
                {data.map((link,idx)=> <CustomLink key={idx} linkData={link} handleClick={this.handleClick}/>)}
                <button onClick={this.handleSwitch} >{this.state.disabled ? "Enable all links" : "Disable all links"}</button>
            </div>
        )
    }
}


export default Link;
