import React, { Component } from 'react';
import randomColor from 'randomcolor';
import Colordiv from './Colordiv.jsx';
import styles from './colordiv.css';

class ColordivContainer extends Component {
    constructor() {
        super()
        this.state = {
            randColorArray: randomColor({count:24})
        }
    }
    handleClick = (id) => {
        this.setState(prevState=>{
            prevState.randColorArray[id] = randomColor();
            return {randomColorArray:prevState.randColorArray}
        })
    }
    render() {
        return (
            <div className={styles.myColor} >
                <h2 className={styles.color} >Random Color Application</h2>
                {this.state.randColorArray.map((color,idx)=> <Colordiv key={idx} color={color} index={idx} handleClick={this.handleClick} /> )}
            </div>
        )
    }
}



export default ColordivContainer;