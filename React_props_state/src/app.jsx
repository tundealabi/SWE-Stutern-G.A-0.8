import React from 'react';
import Pokedex from './components/pokedex/Pokedex.jsx';
import ColordivContainer from './components/randColor/ColordivContainer.jsx';
import TodoList from './components/todoApp/Todolist.jsx';


function App() {
    return (
        <div>
            <Pokedex />
            <ColordivContainer />
            <TodoList />
        </div>
    )
}

export default App;
