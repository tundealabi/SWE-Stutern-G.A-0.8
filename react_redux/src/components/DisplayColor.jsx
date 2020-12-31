import React from 'react';
import { useParams, useHistory, Link, Redirect } from 'react-router-dom';
import styling from './display.css';



const DisplayColor = () => {
    const { color } = useParams();
    const retrieve = JSON.parse(localStorage.getItem("COLORS")) || [];
    const findColor = retrieve.filter(colore=> colore.colorName == color.toLowerCase())[0];
    return(
        findColor ? (
                    <div className={styling.colorDetails} style={{ background: findColor.colorValue }}>
                    <h1>This is color {findColor.colorName} </h1>
                    <h2> Isn't it Beautiful </h2>
                    <h2>
                    <Link to="/">Go back</Link>
                    </h2>
             </div>
        )
        :
        <Redirect to='/colors'/>
        // useHistory().push('/colors')
    )
}

export default DisplayColor;
