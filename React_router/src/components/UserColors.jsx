import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styling from './display.css';

class UserColors extends Component {
    constructor(){
        super();
        this.state = {
            colors: JSON.parse(localStorage.getItem("COLORS")) || []
        }
    }
    render(){
        return(
            <div className={styling.colorContainer}>
                {this.state.colors.length ?
                    <React.Fragment>
                    <h2>Available Colors</h2>
                    {this.state.colors.map((color,index) => <p key={index}><Link style={{color:color.colorValue}} to={`colors/${color.colorName}`}>{color.colorName}</Link></p> )}
                    </React.Fragment>
                    :
                    <>
                    <h2>No color in your storage yet</h2>
                    <button><Link to='/colors/new'>Add a color</Link></button>
                    </>
                }
            </div>
        )
    }
}
   
export default UserColors;
