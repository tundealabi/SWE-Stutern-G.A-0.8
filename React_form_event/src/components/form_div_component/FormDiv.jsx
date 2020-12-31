import React,{ Component } from 'react';
import Div from './Div.jsx';

const style = {
    "width": "90%",
    "display": "flex",
    "flexFlow": "row wrap"
}

class FormDiv extends Component {
    state = {
        width: "",
        height: "",
        color: "#000000",
        divs: []
    }
handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState=>{
        const {width, height, color} = prevState;
        const id = Date.now();
        return {
            divs: [...prevState.divs,{width,height,color,id}]
        }
    })
}
handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({
        [name] : value
    })
}
handleClick = (id) => {
    this.setState(prevState=>{
        const findIdx = prevState.divs.findIndex(div=>div.id == id);
        prevState.divs.splice(findIdx,1);
        return {
            divs: [...prevState.divs]
        }
    })
}
render(){
    return (
        <div>
        <h2>Div Adder Application</h2>
        <form onSubmit={this.handleSubmit}>
  <fieldset>
    <legend>Generate a Div</legend>
    <p>
      <label htmlFor="width">Width: </label>
      <input type="number" min="50" max="250" name="width" id="width" value={this.state.width} onChange={this.handleChange}/>
    </p>
    <p>
      <label htmlFor="height">Height: </label>
      <input type="number" min="50" max="250" name="height" id="height" value={this.state.height} onChange={this.handleChange}/>
    </p>
    <p>
      <label htmlFor="color">Color: </label>
      <input type="color" name="color" id="color" value={this.state.color} onChange={this.handleChange}/>
    </p>
  </fieldset>
  <p> <button type="submit">Create Div</button> </p>
</form>
        {this.state.divs.length ?
        <div style={style} >{this.state.divs.map(div=> <Div key={div.id} data={div} handleClick={this.handleClick}/>) }</div>
        :
        <h3>Currently, there are no divs</h3>
        }
        </div>
    )
}
}

export default FormDiv;