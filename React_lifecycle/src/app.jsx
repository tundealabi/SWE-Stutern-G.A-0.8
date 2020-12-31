import React from 'react';
import Giphy from './components/giphy_component/giphy.jsx';
import TodoList from './components/todo_component/TodoList.jsx';


function App() {
    return (
        <div>
           <Giphy />
           <hr />
           <TodoList />
        </div>
    )
}

export default App;
