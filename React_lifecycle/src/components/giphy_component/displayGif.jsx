import React from 'react';
import styles from './giphy.css';
const style = {
    "display": "block",
    "fontSize": "1rem",
    "marginBottom": "2rem"
}

const DisplayGif = ({gifData:{id,imgUrl,searchTerm},handleClick}) => (
    <div className={styles.eachGif}>
        <img className={styles.giphyImg} src={imgUrl}/>
        <p>Term: {searchTerm}</p>
        <button style={style} onClick={handleClick.bind(id)} >Remove</button>
    </div>
    
)
   
export default DisplayGif;
