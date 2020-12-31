import React from 'react';
import FormDiv from './components/form_div_component/FormDiv.jsx';
import CustomLink from './components/link_component/Link.jsx';
import TodoList from './components/todo_component/TodoList.jsx';


function App() {
    return (
        <div>
           <CustomLink />
           <hr />
           <FormDiv />
           <hr />
           <TodoList />
        </div>
    )
}

export default App;
