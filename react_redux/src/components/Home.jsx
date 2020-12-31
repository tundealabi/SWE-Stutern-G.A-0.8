import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styling from './display.css';
// import regeneratorRuntime from "regenerator-runtime";

const Home = () => (
    <div className={styling.home}>
        <h1>Welcome to the color factory</h1>
        <p><Link to='/colors'>View Available colors</Link></p>
        <button><Link to='/colors/new'>Add a color</Link></button>
    </div>
)

export default Home;
