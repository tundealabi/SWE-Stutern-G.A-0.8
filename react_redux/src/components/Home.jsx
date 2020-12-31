import React from 'react';
import { Link } from 'react-router-dom';
import styling from './display.css';
// import regeneratorRuntime from "regenerator-runtime";

const Home = () => (
    <div className={styling.home}>
        <h1>Welcome to the Todo Application</h1>
        <p><Link to='/todos'>View Available Todos</Link></p>
        <button><Link to='/todos/new'>Add a Todo</Link></button>
    </div>
)

export default Home;
