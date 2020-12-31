import React from 'react';
import styling from './display.css';

const style = {
    "textDecoration": "line-through red"
}


const Todo = ({todoData:{id,title,description,completed},handleChange,handleClick}) => {
    return(
        <div className={styling.todo}>
            <input type="checkbox" name="completed" id={title} onChange={handleChange.bind(null,id)} checked={completed} />
            <label htmlFor={title}>{title}</label>
            <button onClick={handleClick.bind(null,id,"delete")}>X</button>
            <button onClick={handleClick.bind(null,id,"edit")}>Edit</button>
            <p style={completed ? style : null}>{description}</p>
            <hr />
         </div>
    )
}

export default Todo;
