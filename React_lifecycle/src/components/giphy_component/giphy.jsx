import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import DisplayGif from './displayGif.jsx';
import apiKey from '../../../secrets';
import styles from './giphy.css';
class Giphy extends Component {
    constructor(){
        super();
        this.state = {
            gifs:[],
            searchTerm: ""
        }
    }
    async componentDidMount(){
        const data = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const result = await data.json();
        this.setState({gifs:[{id: result.data.id, imgUrl:result.data.images.original.url, searchTerm:result.data.title}]})
    }
    handleClick(id) {
      const remainingGifs = this.state.gifs.filter(gif=> gif.id != id);
      this.setState({
          gifs: remainingGifs
      })
    } 
    handleSubmit = async(e) => {
        e.preventDefault();
        if(this.state.searchTerm.length > 2){
            const data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&limit=10&api_key=${apiKey}`)
            const result = await data.json();
            const index = Math.floor(Math.random() * result.data.length);
            this.setState(prevState=>{
                return {
                    searchTerm: "",
                    gifs: [...prevState.gifs, {id:result.data[index].id, imgUrl:result.data[index].images.original.url, searchTerm:result.data[index].title}]
                }   
            })
            }else alert("Search term must be more than 2 characters");
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>Giphy Application</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button>Search</button>
                </form>
                {
                this.state.gifs.length ?
                <div className={styles.giphy}>
                    {this.state.gifs.map(gif=> <DisplayGif key={gif.id} gifData={gif} handleClick={this.handleClick.bind(this,gif.id)}/>)}
                </div>
                :
                    <h3>Gifs loading ......</h3>
                }
            </div>
        )
    }
}


export default Giphy;
